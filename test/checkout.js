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
        if (this.prices[item] == undefined){
            console.log("here")
            throw(`No price defined for this album: ${item}`);
        }
        if(this.items[item] == undefined){
            this.items[item] = 1;
        } else {
            this.items[item]++;
        }
    }

    calculateTotal(){
        let total = 0;
        for(const item in this.items){
            total += this.calculateItemTotal(item);
        };
        return total;
    }

    calculateItemTotal(item){
        let total = 0;
        let discount = this.discounts[item];
            if(discount != undefined){
                total += this.calulateDiscount(item, this.items[item], discount)
            } else {
                total += (this.prices[item] * this.items[item]);
            }
            return total;
    };

    calulateDiscount(item, itemCount, discount){
        let total = 0;
        let numOfDiscounts = itemCount / discount.count;
            total += numOfDiscounts * discount.price;

        let remainder = this.items[item] % discount.count;
            total += remainder * this.prices[item];

        return total;
    }


    addDiscount(item, itemCount, discountPrice){
        this.discounts[item] = {count: itemCount, price: discountPrice}
    }

}