import { Controller, Get, Post, Request, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('/alllist')
    async getAllProductList() {
        return await this.productService.getAllProductList();
    }

    @Get('/listByOwner/:ownerId')
    async getProductList(@Param('ownerId') ownerId: string) {
        console.log('Get Product List from ' + ownerId);
        
        return await this.productService.getProductList(ownerId);
    }

    @Get('/featuredList')
    async getFeaturedProductList() {
        return await this.productService.getFeaturedProductList();
    }

    @Post('/create')
    async createProduct(@Request() req) {
        return await this.productService.createProduct(req.body);
    }


    @Put('/update')
    async updateProduct(@Request() req) {
        return await this.productService.updateProduct(req);
    }

    @Delete('/data/delete/:id')
    async deleteProduct(@Param('id') id: string) {
        return await this.productService.deleteProduct(id);
    }

    @Get('/dataById/:id')
    async getProduct(@Param('id') id: string) {
        return await this.productService.getProduct(id);
    }

    @Get('/dataByName/:name')
    async findOneByName(@Param('name') name: string) {
        return await this.productService.findOneByName(name);
    }

    /*@Get('/:description')
    async findOneByDescription(@Param('description') description: string) {
        return await this.productService.findOneByDescription(description);
    }*/

    @Get('/dataByPrice/:price')
    async findOneByPrice(@Param('price') price: string) {
        return await this.productService.findOneByPrice(price);
    }

    @Get('/dataByOwner/:owner')
    async findOneByOwner(@Param('owner') owner: string) {
        return await this.productService.findOneByOwner(owner);
    }

    @Get('/dataBySize/:size')
    async findOneBySize(@Param('size') size: string) {
        return await this.productService.findOneBySize(size);
    }


}
