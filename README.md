# numArray
A tool to create arrays with number ranges

## Installation
To install, run

    $ npm install --save numarray

## Usage
To use, it must first be declared with

    var numArray = require("numarray");

When it is declared, it must be declared with an array length

    var arr3 = new numArray(3); // all arrays declared by arr3 will have length of 3

It can be used by using `.from()` `.to()`, and one number does not have to be larger than another

    arr3.from(3).to(5) // [3, 4, 5]
    arr3.from(5).to(3) // [5, 4, 3]
    arr3.from(0).to(0) // [0, 0, 0]

It can also be used in a chain upon numArray declaration as well

    new numArray(3).from(4).to(6) // [4, 5, 6]

## Version
**1.0.0**
* First version
