const Checkout = require('./checkout');
const expect = require('chai').expect;

it('Can add item price', function(){
    let checkout = new Checkout();
    checkout.addItemPrice('a', 1);
});

it('Can add item', function(){
    let checkout = new Checkout();
    checkout.addItem();
})