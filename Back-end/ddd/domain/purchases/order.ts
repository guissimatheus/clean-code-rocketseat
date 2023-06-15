export class Order {
    public createdAt: Date;
    public total: number;
    public customerDocument: string

    constructor(total: number, customerDocument: string) {
        this.createdAt = new Date();
        this.total = total;
        this.customerDocument = customerDocument;
    }
}