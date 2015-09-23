"use strict";
var expect = require("chai").expect;
var numArray = require("../numarray");

describe("numArray", function(){

    it("should create an array based on the beginning and the end", function(){
        var arr = new numArray(3);
        expect(arr.from(3).to(5)).to.deep.equal([3, 4, 5]);    
        expect(arr.from(3).to(7)).to.deep.equal([3, 5, 7]);    
        expect(arr.from(1).to(2)).to.deep.equal([1, 1.5, 2]);
    });

    it("should work in reverse", function(){
        var arr = new numArray(3);
        expect(arr.from(5).to(3)).to.deep.equal([5, 4, 3]);    
        expect(arr.from(7).to(3)).to.deep.equal([7, 5, 3]);    
        expect(arr.from(2).to(1)).to.deep.equal([2, 1.5, 1]);
    });

    it("should still work during extreme circumstances", function(){
        var arr = new numArray(3);
        expect(arr.from(0).to(0)).to.deep.equal([0, 0, 0]);
        expect(arr.from(3).to(3)).to.deep.equal([3, 3, 3]);
    });

    it("should be able to be declared in chain", function(){
        expect(new numArray(3).from(0).to(0)).to.deep.equal([0, 0, 0]);
    });

});
