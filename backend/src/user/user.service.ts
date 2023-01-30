import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
      

      constructor(
        @InjectConnection() private connection: Connection,
        @InjectModel(User.name) private userModel: Model<UserDocument>
        ) {
          //connection.
        }
    
      //Solo deberia usarse internamente
      async findOne(email: string): Promise<User> {
        
        const q = await this.userModel.find({email: email}).exec();
        console.log('Found user', q);
        
        return q[0];
      }

      //Este es el que se usa desde afuera
      async findOneById(id: string): Promise<any> {
        const u = {
          _id: null,
          email: '',
          username: ''
        }

        const q = await this.userModel.find({_id: id}).exec();
        console.log('Found user', q);
        
        u._id = q[0]._id;
        u.email = q[0].email;
        u.username = q[0].username;

        return u;

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

      async getUserData(id: string): Promise<User> {
        return await this.findOneById(id);
      }

  

}
