import { Product } from '../products/product';

export class Buyer{

    id;
    firstName: string;
    lastName: string;
    email: string;
    products: Product[];
    
    constructor(id, firstName: string, lastName: string, email: string, products?: Product[]){
        
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.products = products;

    }
}