"use strict";
exports.__esModule = true;
exports.Operations = void 0;
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.prototype.add = function (cart, product_object) {
        cart.push(product_object);
    };
    Operations.prototype.remove = function (cart, id) {
        cart = cart.filter(function (item) { return item.id != id; });
        return cart;
    };
    Operations.prototype.display = function (cart_data) {
        for (var _i = 0, cart_data_1 = cart_data; _i < cart_data_1.length; _i++) {
            var cart = cart_data_1[_i];
            //console.log("ID: " + cart.id + ", Product Name: " + cart.product_name+" Price: "+cart.price);
            cart.displayProduct();
        }
    };
    return Operations;
}());
exports.Operations = Operations;
