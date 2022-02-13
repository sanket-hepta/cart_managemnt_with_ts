"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, product_name, price) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }
    Product.prototype.displayProduct = function () {
        console.log("ID: " + this.id + ", Product Name: " + this.product_name + " Price: " + this.price);
    };
    return Product;
}());
exports.Product = Product;
