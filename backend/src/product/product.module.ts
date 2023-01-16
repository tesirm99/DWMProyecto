import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { Transaction, TransactionSchema } from 'src/transaction/transaction.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: Transaction.name, schema: TransactionSchema }])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
