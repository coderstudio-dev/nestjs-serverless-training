import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import fetch from 'node-fetch';
import { LoginDto } from 'src/App/dto/User/login.dto';
import { SignUpDto } from 'src/App/dto/User/sign-up.dto';
import { UpdateUserDto } from 'src/App/dto/User/update-user.dto';
import { UserRepository } from '../../Infra/Repository/user.repository';
import { Users } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private AUTH0_DOMAIN: string;
  private AUTH0_AUDIENCE: string;
  private AUTH0_CLIENT_ID: string;
  private AUTH0_CLIENT_SECRET: string;
  private AUTH0_GRANT_TYPE: string;
  private BCRYPT_SALT_ROUNDS: number;
  constructor(
    private userRepository: UserRepository,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN');
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE');
    this.AUTH0_CLIENT_ID = this.configService.get('AUTH0_CLIENT_ID');
    this.AUTH0_CLIENT_SECRET = this.configService.get('AUTH0_CLIENT_SECRET');
    this.AUTH0_GRANT_TYPE = this.configService.get('AUTH0_GRANT_TYPE');
    this.BCRYPT_SALT_ROUNDS = parseInt(
      this.configService.get('BCRYPT_SALT_ROUNDS'),
    );
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { emailAddress, password } = loginDto;
    const user = await this.userRepository.findByEmail(emailAddress);

    if (!user) throw new UnauthorizedException();

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) throw new UnauthorizedException();

    const url = `${this.AUTH0_DOMAIN}oauth/token`;
    const body = JSON.stringify({
      client_id: this.AUTH0_CLIENT_ID,
      client_secret: this.AUTH0_CLIENT_SECRET,
      audience: this.AUTH0_AUDIENCE,
      grant_type: this.AUTH0_GRANT_TYPE,
    });
    const headers = { 'content-type': 'application/json' };
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    const { access_token } = await response.json();

    const payload = {
      access_token,
      sub: user.emailAddress,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async signUp(signUpDto: SignUpDto): Promise<Users> {
    const { confirmPassword, ...user } = signUpDto;

    if (user.password !== confirmPassword) throw new UnauthorizedException();

    const hashedPassword = await bcrypt.hash(
      user.password,
      this.BCRYPT_SALT_ROUNDS,
    );

    signUpDto.password = hashedPassword;

    return this.userRepository.create(signUpDto);
  }

  update(id: number, updateProfileDto: UpdateUserDto): Promise<Users> {
    return this.userRepository.update(id, updateProfileDto);
  }

  findOne(id: number): Promise<Users> {
    return this.userRepository.findOne(id);
  }

  remove(id: number): Promise<Users> {
    return this.userRepository.remove(id);
  }
}
