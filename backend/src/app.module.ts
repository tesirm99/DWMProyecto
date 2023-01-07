import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';


@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot('mongodb://user:dwmpassword@127.0.0.1:27017/dwm-proyecto?directConnection=true', {useNewUrlParser:true}), ProductModule],  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
