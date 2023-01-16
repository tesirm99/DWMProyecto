import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
    @Prop()
    buyer: string;

    @Prop()
    seller: string;

    @Prop()
    product: string;

    @Prop()
    status: string;

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);