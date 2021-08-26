const Checkout = require('./checkout');
const expect = require('chai').expect;

let checkout;

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
});

it('Can initiate a checkout class', function(){

});

it('Can add item price: addItemPrice', function(){
    
});

it('Can add item: addItemToCart', function(){
    checkout.addItemToCart();
});

it('Calculates current total: currentTotal', function(){
    checkout.addItemToCart('a');
    expect(checkout.currentTotal()).to.equal(1);
});

it('Can add multiple items and get correct total', function(){
    checkout.addItemToCart('a');
    checkout.addItemToCart('b');
    expect(checkout.currentTotal()).to.equal(3);
});

it('Can add discount rules: addDiscount', function(){
    checkout.addDiscount('a', 3, 2);
});

it('Can apply discount rules to the total', function(){
    checkout.addDiscount('a', 3, 2);
    checkout.addItemToCart('a');
    checkout.addItemToCart('a');
    checkout.addItemToCart('a');
    expect(checkout.currentTotal()).to.equal(2);
    
})