export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly image: string;
    readonly owner: string;
    readonly size: number;
    readonly status: string;
}