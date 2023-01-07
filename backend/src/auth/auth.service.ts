import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';

const saltRounds = 10;

@Injectable()
export class AuthService {

  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user == null || user == undefined) {
      return null;
    }
    
    const match = await compare(pass, user.password);

    if(match){
      return user;
    }

    return null;
   
  }

  //Genera el token JWT
  async login(user: any) {    

    const validation = await this.validateUser(user.email, user.password);    

    if(validation !== null) {
      const payload = { username: user.username, sub: user.userId };
      return {
        id: validation._id,
        access_token: this.jwtService.sign(payload),
      };
    } else {
      return HttpStatus.I_AM_A_TEAPOT;
    }

    
  }

  async register(user: any) {
  
    const hashedPassword = await hash(user.password, saltRounds);

    user.password = hashedPassword;
    
    this.usersService.create(user);

  }
}