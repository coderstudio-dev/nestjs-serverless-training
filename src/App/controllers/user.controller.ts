import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from '../dto/User/sign-up.dto';
import { UpdateUserDto } from '../dto/User/update-user.dto';
import { LoginDto } from '../dto/User/login.dto';
import { UserEntity } from 'src/Domain/entities/user.entity';
import { UserService } from 'src/Domain/services/user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @ApiCreatedResponse({ type: Object })
  login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  @Post('sign-up')
  @ApiCreatedResponse({ type: UserEntity })
  signUp(@Body() signUpDto: SignUpDto) {
    return this.userService.signUp(signUpDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UserEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
