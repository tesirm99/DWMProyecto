import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './create-product.dto';
import { Product, ProductDocument } from './product.schema';
import { Connection, Model } from 'mongoose';
import { Transaction, TransactionDocument } from 'src/transaction/transaction.schema';

@Injectable()
export class ProductService {

  constructor(
      @InjectConnection() private connection: Connection,
      @InjectModel(Product.name) private productModel: Model<ProductDocument>,
      @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>
  ) {}
      
  
  async getProduct(id: string) {

    const q = await this.productModel.find({_id: id}).exec();
    console.log('Found product', q)
    
    return q[0];
      
  }

  deleteProduct(id: string) {
      const q = this.productModel.deleteOne({_id: id}).exec();
      console.log('Deleted product', q)
      return q;
  }

  updateProduct(req: any) {
      throw new Error('Method not implemented.');
  }

  async createProduct(createdProductDto: any) {

      console.log('Create product: ', createdProductDto);

      const createdProduct = await this.productModel.create(createdProductDto);

      console.log('Created product: ', createdProduct);

      const createdTransaction = await this.transactionModel.create({
          buyer: "NONE",
          seller: createdProductDto.owner,
          product: createdProduct._id,
          status: 'available'
      });

      console.log('Created transaction: ', createdTransaction);
      
      return [createdProduct, createdTransaction];
  }

  async getProductList(ownerId: string) {
      
    const q = await this.productModel.find({owner: ownerId}).exec();

    console.log('Get Product List from ' + ownerId + ': ', q);
    return q;
  }

  async getAllProductList() {
    const q = await this.productModel.find().exec();
    
    console.log('Get All Product List: ', q);

    return q;
  }

  async findOneByName(name: string): Promise<Product> {
    console.log(name);
    const regex = new RegExp(name, 'i');
    const q = await this.productModel.find({name: { $regex: regex }}).exec();
    console.log('Found product by name', q);
    return q[0];
  }

  async findOneByDescription(description: string): Promise<Product> {
    const q = await this.productModel.find({description: description}).exec();
    console.log('Found product', q);
    return q[0];
  }

  async findOneByPrice(price: string): Promise<Product> {
    const q = await this.productModel.find({price: price}).exec();
    console.log('Found product', q);
    return q[0];
  }

  async findOneByImage(image: string): Promise<Product> {
    const q = await this.productModel.find({image: image}).exec();
    console.log('Found product', q);
    return q[0];
  }

  async findOneByOwner(owner: string): Promise<Product> {
    const q = await this.productModel.find({owner: owner}).exec();
    console.log('Found product', q);
    return q[0];
  }

  async findOneBySize(size: string): Promise<Product> {
    const q = await this.productModel.find({size: size}).exec();
    console.log('Found product', q);
    return q[0];
  }

  async getFeaturedProductList() {
    const q = await this.productModel.find().exec();
    console.log('Get Featured Product List: ', q);
    return q.slice(0, 12);
  }

  //Hay que buscar las transacciones donde el usuario sea el comprador y traer los productos asociados a esas transacciones
  async getUserPurchases(id: any) {
    console.log('Get User Purchases from user ', id);
    
    const qtr = await this.transactionModel.find({buyer: id}).exec();
    console.log('Found transactions', qtr);

    let purchaseList = [];
    for (let i = 0; i < qtr.length; i++) {
      const qp = await this.productModel.find({_id: qtr[i].product}).exec();
      console.log('Found product', qp);
      purchaseList.push(qp[0]);
    }

    console.log('Purchase List: ', purchaseList);
    
    return purchaseList;

  }

  //Recorrer carrito, crear una transaccion por cada producto y cambiar el estado del producto a vendido
  async confirmPayment(data: any) {
    console.log('Confirm Payment: ', data);
    let cart = data.products;
    let buyer = data.buyer;
    cart.forEach(async (prod) => {

      const q = await this.transactionModel.create({
        buyer: buyer,
        seller: prod.owner,
        product: prod._id,
        status: 'sold'
      });

      console.log('Created transaction: ', q);

      const q2 = await this.productModel.updateOne({_id: prod._id}, {status: 'sold'}).exec();
      console.log('Updated product: ', q2);

    });
    
  }

}
