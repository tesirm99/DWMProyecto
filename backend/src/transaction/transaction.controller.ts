import { Controller, Get, Param, Post, Request, Put, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {

    constructor(private transactionService: TransactionService) { }

    @Get('/alllist')
    async getAllTransactionList() {
        return await this.transactionService.getAllTransactionList();
    }

    @Get('/listByProd/:productId')
    async getTransactionListByProduct(@Param('productId') productId: string) {
        return await this.transactionService.getTransactionListByProduct(productId);
    }

    @Get('/listByBuyer/:buyerId')
    async getTransactionListByBuyer(@Param('buyerId') buyerId: string) {
        return await this.transactionService.getTransactionListByBuyer(buyerId);
    }

    @Post('/create')
    async createTransaction(@Request() req) {
        return await this.transactionService.createTransaction(req.body);
    }

    @Put('/update')
    async updateTransaction(@Request() req) {
        return await this.transactionService.updateTransaction(req);
    }

    @Delete('/delete/:id')
    async deleteTransaction(@Param('id') id: string) {
        return await this.transactionService.deleteTransaction(id);
    }

    @Get('/:id')
    async getTransaction(@Param('id') id: string) {
        return await this.transactionService.getTransaction(id);
    }

    

}
