const assert = require('assert');
const Decorator = require('../decorator.js');

describe("Decorator", function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
    });

    it("Should have an empty paint stock", function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });
})