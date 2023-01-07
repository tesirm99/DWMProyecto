import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {

      constructor(
        @InjectConnection() private connection: Connection,
        @InjectModel(User.name) private userModel: Model<UserDocument>) {
          //connection.
        }
    
      async findOne(email: string): Promise<User> {
        console.log(email);
        
        const q = await this.userModel.find({email: email}).exec();
        console.log(q);
        
        return q[0];
      }

      async create(createUserDto: CreateUserDto): Promise<User> {
        
        const createdUser = await this.userModel.create(createUserDto);

        console.log(createdUser);
        

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

      async getUserData(email: string): Promise<User> {
        return await this.findOne(email);
      }

}
