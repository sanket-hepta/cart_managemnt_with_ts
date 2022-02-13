export class Operations{
    add(cart, product_object){
        cart.push(product_object);
    }

    remove(cart, id){
        cart = cart.filter(item => item.id != id);
        return cart;
    }

    display(cart_data){
        for(let cart of cart_data){
            cart.displayProduct();
        }
    }
}