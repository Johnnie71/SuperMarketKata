const Checkout = require('./checkout');
const expect = require('chai').expect;

it('Can initiate checkout class', function(){
    let checkout = new Checkout();
});

it('Can add item price', function(){
    let checkout = new Checkout();
    checkout.addItemPrice();
})