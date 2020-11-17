const assert = require('assert');
const PaintCan = require('../PaintCan.js');

describe("PaintCan", function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(5);
    });

    it("should have litres of paint", function(){
        const actual = paintCan.litres;
        assert.strictEqual(actual, 5)
    })

    describe("paint", function(){
        it("should check if empty", function(){
            paintCan = new PaintCan(0);
            const actual = paintCan.isEmpty();
            assert.strictEqual(actual, true)
        })
    

        it("should be able to empty itself of paint", function(){
            paintCan = new PaintCan(10);
            paintCan.canEmpty();
            const actual = paintCan.isEmpty();
            assert.strictEqual(actual, true)
        })
    })
})