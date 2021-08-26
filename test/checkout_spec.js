const Checkout = require('./checkout');
const expect = require('chai').expect;

let checkout;

beforeEach(function(){
    checkout = new Checkout();
});

it('Can initiate a checkout class', function(){

});

it('Can add item price: addItemPrice', function(){
    checkout.addItemPrice('a', 1);
});

it('Can add item: addItemToCart', function(){
    checkout.addItemToCart();
});

it('Calculates current total: currentTotal', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItemToCart('a');
    expect(checkout.currentTotal()).to.equal(1);
});

it('Can add multiple items and get correct total', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
    checkout.addItemToCart('a');
    checkout.addItemToCart('b');
    expect(checkout.currentTotal()).to.equal(3);
})