module.exports = class Checkout{
    constructor(){
        this.prices = new Object();
        this.discounts = new Object();
        this.items = new Object();
    }

    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItemToCart(item){
        if(this.items[item] == undefined){
            this.items[item] = 1;
        } else {
            this.items[item]++;
        };
    }

    currentTotal(){
        let total = 0;
        for(const item in this.items){
            total += (this.prices[item] * this.items[item]);
        };
        return total;
    }

    addDiscount(item, itemCount, discountPrice){
        this.discounts[item] = {count: itemCount, price: discountPrice}
    }

}