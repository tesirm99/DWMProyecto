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
        return await this.productService.createProduct(req.body);
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

    @Get('/:name')
    async findOneByName(@Param('name') name: string) {
        return await this.productService.findOneByName(name);
    }

    @Get('/:description')
    async findOneByDescription(@Param('description') description: string) {
        return await this.productService.findOneByDescription(description);
    }

    @Get('/:price')
    async findOneByPrice(@Param('price') price: string) {
        return await this.productService.findOneByPrice(price);
    }

    @Get('/:image')
    async findOneByImage(@Param('image') image: string) {
        return await this.productService.findOneByImage(image);
    }

    @Get('/:owner')
    async findOneByOwner(@Param('owner') owner: string) {
        return await this.productService.findOneByOwner(owner);
    }

    @Get('/:size')
    async findOneBySize(@Param('size') size: string) {
        return await this.productService.findOneBySize(size);
    }


}
