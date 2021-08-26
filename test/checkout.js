module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.discounts = new Object();
        this.total = 0;
    }

    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItemToCart(item){
        this.total += this.prices[item];
    }

    currentTotal(){
        return this.total;
    }

    addDiscount(item, itemCount, discountPrice){
        this.discounts[item] = {count: itemCount, price: discountPrice}
    }

}