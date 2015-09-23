"use strict";
var numArray = function(length){
    var t0, tf, arr;

    var from = function(init){
        arr = [];
        t0 = init;
        return {
            to: function(fin){
                tf = fin;
                var delta = (tf - t0)/(length - 1);
                for (var i = 0; i < length; i++){
                    arr.push(t0 + i*delta); 
                }
                return arr;
            }
        }
    };
    this.from = from;

    return {from: from};

};

module.exports = numArray;
