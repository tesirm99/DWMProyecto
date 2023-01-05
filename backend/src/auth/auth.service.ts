import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<Boolean> {
    const user = await this.usersService.findOne(username)[0];
    
    if (user == null || user == undefined) {
      return false;
    }

    const match = await compare(pass, user.password);

    if(match){
      return true;
    }

    return false;
   
  }

  //Genera el token JWT
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}