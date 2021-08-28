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

    calculateTotal(){
        let total = 0;
        for(const item in this.items){
            let discount = this.discounts[item];
            if(discount != undefined){
                let numOfDiscounts = this.items[item] / discount.count;
                total += numOfDiscounts * discount.price;

                let remainder = this.items[item] % discount.count;
                total += remainder * this.prices[item];
            } else {
                total += (this.prices[item] * this.items[item]);
            }
        };
        return total;
    }

    calculateItemTotal(item){
        
    }

    addDiscount(item, itemCount, discountPrice){
        this.discounts[item] = {count: itemCount, price: discountPrice}
    }

}