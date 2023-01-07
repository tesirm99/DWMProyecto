import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    price: number;
    
    @Prop()
    image: string;
    

    @Prop()
    owner: string;

    @Prop()
    size: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);