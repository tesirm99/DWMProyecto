import { Body, Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/data/:id')
  async getUserData(@Param() params) {
    console.log(params.id);
    
    return await this.userService.getUserData(params.id);
  }

  @Delete('/delete/:id')
  async delete(@Param() params) {
    return await this.userService.delete(params.id);
  }

}