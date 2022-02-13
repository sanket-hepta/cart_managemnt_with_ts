import { Product } from "./Product";
import { Operations } from "./Operations";

let cart:Product[] = [];

let obj:Operations = new Operations();
obj.add(cart, new Product(1, "Pencil", 100));
obj.add(cart, new Product(2, "Pen", 50));
obj.add(cart, new Product(3, "Book", 150));
obj.add(cart, new Product(4, "Note Book", 200));

console.log("-----------Added Products in Cart-----------");
obj.display(cart);

console.log("--------After Remove id 2 from cart:----------");
cart = obj.remove(cart, 2);
obj.display(cart);