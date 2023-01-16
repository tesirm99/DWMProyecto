export class CreateTransactionDto {
    readonly buyer: string;
    readonly seller: string;
    readonly product: string;
    readonly status: string;
}