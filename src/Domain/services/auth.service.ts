import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from 'src/App/dto/User/login.dto';
import { SignUpDto } from 'src/App/dto/User/sign-up.dto';
import { UpdateUserDto } from 'src/App/dto/User/update-user.dto';
import { AuthRepository } from '../../Infra/Repository/auth.repository';
import { Users } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private AUTH0_DOMAIN: string;
  private AUTH0_AUDIENCE: string;
  private AUTH0_CLIENT_ID: string;
  private AUTH0_CLIENT_SECRET: string;
  private AUTH0_GRANT_TYPE: string;
  private BCRYPT_SALT_ROUNDS: number;
  constructor(
    private authRepository: AuthRepository,
    private configService: ConfigService,
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
    const { email, password } = loginDto;
    const user = await this.authRepository.findByEmail(email);

    if (!user) throw new UnauthorizedException();

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) throw new UnauthorizedException();

    const url = `${this.AUTH0_DOMAIN}/oauth/token`;

    const headers = { 'content-type': 'application/x-www-form-urlencoded' };

    const body = new URLSearchParams({
      client_id: this.AUTH0_CLIENT_ID,
      client_secret: this.AUTH0_CLIENT_SECRET,
      audience: this.AUTH0_AUDIENCE,
      grant_type: this.AUTH0_GRANT_TYPE,
      scope: 'openid email',
      username: email,
      password,
    });

    const options = {
      method: 'POST',
      headers,
      body,
    };

    const response = await fetch(url, options);

    return await response.json();
  }

  async signUp(signUpDto: SignUpDto): Promise<Users> {
    const { confirmPassword, password, username, emailAddress } = signUpDto;

    const user = await this.authRepository.findByEmailOrUsername(
      emailAddress,
      username,
    );

    if (user) throw new UnauthorizedException();

    if (password !== confirmPassword) throw new UnauthorizedException();

    const hashedPassword = await bcrypt.hash(password, this.BCRYPT_SALT_ROUNDS);

    signUpDto.password = hashedPassword;
    delete signUpDto.confirmPassword;

    return await this.authRepository.signUp(signUpDto);
  }

  update(id: number, updateProfileDto: UpdateUserDto): Promise<Users> {
    return this.authRepository.update({ id }, updateProfileDto);
  }

  findById(id: number): Promise<Users> {
    return this.authRepository.findById(id);
  }

  remove(id: number): Promise<Users> {
    return this.authRepository.remove(id);
  }
}
