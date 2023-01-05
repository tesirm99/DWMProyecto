import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './register.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
    // private readonly users = [
    //     {
    //       userId: 1,
    //       username: 'patata',
    //       password: 'patata',
    //     },
    //     {
    //       userId: 2,
    //       username: 'patata2',
    //       password: 'patata2',
    //     },
    //   ];

      constructor(
        @InjectConnection() private connection: Connection,
        @InjectModel(User.name) private userModel: Model<UserDocument>) {
          //connection.
        }
    
      async findOne(username: string): Promise<User[]> {
        const q = this.userModel.find({username: username}).exec();
        console.log(q);
        
        return q;
      }

      async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = await this.userModel.create(createUserDto);
        return createdUser;
      }
    
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
      async delete(id: string) {
        const deletedCat = await this.userModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedCat;
      }

}
