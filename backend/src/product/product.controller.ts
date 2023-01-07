import { Controller, Get, Post, Request, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('/alllist')
    async getAllProductList() {
        return await this.productService.getAllProductList();
    }

    @Get('/list/:ownerId')
    async getProductList(@Param('ownerId') ownerId: string) {
        return await this.productService.getProductList(ownerId);
    }

    @Post('/create')
    async createProduct(@Request() req) {
        return await this.productService.createProduct(req);
    }


    @Put('/update')
    async updateProduct(@Request() req) {
        return await this.productService.updateProduct(req);
    }

    @Delete('/delete/:id')
    async deleteProduct(@Param('id') id: string) {
        return await this.productService.deleteProduct(id);
    }

    @Get('/:id')
    async getProduct(@Param('id') id: string) {
        return await this.productService.getProduct(id);
    }


}
