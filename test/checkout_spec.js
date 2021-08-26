const Checkout = require('./checkout');
const expect = require('chai').expect;

let checkout;

beforeEach(function(){
    checkout = new Checkout();
});

it('Can initiate a checkout class', function(){

});

it('Can add item price', function(){
    checkout.addItemPrice('a', 1);
});

it('Can add item', function(){
    checkout.addItem();
});

it('Calculates current total', function(){
    checkout.addItem('a');
    checkout.addItemPrice('a', 1);
    expect(checkout.currentTotal()).to.equal(1);
});

it('Can add multiple items and get correct total', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.currentTotal()).to.equal(3);
})