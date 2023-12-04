interface IOperations {
    add(a: number, b: number): number;
}
class Operations implements IOperations {
    add(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }
}

interface Product {
    id: number;
    price: number;
    name: string;
    description?: string;
}
// class ProductInfo implements Product {
//     id: number;
//     price: number;
//     name: string;
//     description?: string | undefined;
// }
const dell: Product = {
    id: 1,
    name: 'dell',
    price: 1000
}