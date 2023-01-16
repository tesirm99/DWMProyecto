import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction, TransactionSchema } from './transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  providers: [ TransactionService],
  controllers: [TransactionController]
})
export class TransactionModule {}
