import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './user.schema';
import { UserController } from './user.controller';

@Module({
  imports: [ MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService],
  controllers: [ UserController],
})
export class UserModule {}