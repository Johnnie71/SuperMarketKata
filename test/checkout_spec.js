const Checkout = require('./checkout');
const expect = require('chai').expect;

let checkout;

beforeEach(){
    checkout = new Checkout();
}

it('Can add item price', function(){
    checkout.addItemPrice('a', 1);
});

it('Can add item', function(){
    checkout.addItem();
})