export class Product{
    id: Number;
    product_name: String;
    price: Number;

    constructor(id:Number, product_name: String, price: Number){
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }

    displayProduct(){
        console.log("ID: " + this.id + ", Product Name: " + this.product_name+" Price: "+this.price);
    }
}