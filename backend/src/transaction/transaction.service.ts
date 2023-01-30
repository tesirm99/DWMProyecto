import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from './transaction.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class TransactionService {

    constructor(
        @InjectConnection() private connection: Connection,
        @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>
    ) {}

    async getTransaction(id: string) {
    
        const q = await this.transactionModel.find({_id: id}).exec();
        console.log('Found transaction', q)

        return q[0];

    }

    deleteTransaction(id: string) {
        throw new Error('Method not implemented.');
    }

    updateTransaction(req: any) {
        throw new Error('Method not implemented.');
    }

    async createTransaction(createdTransactionDto: any) {

        console.log('Create transaction: ', createdTransactionDto);

        const createdTransaction = await this.transactionModel.create(createdTransactionDto);

        console.log('Created transaction: ', createdTransaction);

        return createdTransaction;
    }

    async getTransactionListByBuyer(buyerId: string) {
            
        const q = await this.transactionModel.find({buyer: buyerId}).exec();

        console.log('Get Transaction List from ' + buyerId + ': ', q);

        return q;
    }

    async getAllTransactionList() {
        const q = await this.transactionModel.find().exec();
        
        console.log('Get All Transaction List: ', q);

        return q;
    }

    async getTransactionListByProduct(productId: string) {
        const q = await this.transactionModel.find({product: productId}).exec();

        console.log('Get Transaction List from ' + productId + ': ', q);

        return q;

    }

    async getTransactionListBySeller(sellerId: string) {
        const q = await this.transactionModel.find({seller: sellerId}).exec();

        console.log('Get Transaction List from ' + sellerId + ': ', q);

        return q;

    }




}
