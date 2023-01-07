import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  //@UseGuards(LocalAuthGuard) Esto se puede poner pero hay que ponerle el tag @Public que hay que hacerlo tmb
  @Post('auth/login')
  async login(@Request() req) {
    
    return this.authService.login(req.body);
  }

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
