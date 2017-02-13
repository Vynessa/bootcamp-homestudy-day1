'use strict'
var getPrimes = require('../src/library.js').getPrimes;

describe("Get array of prime: ", function () {
    describe("Verify that the array of primes is accurate", function () {

      it("should return [2, 3, 5, 7] for 7", function () {
        expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
      });
      
      it("should return [2, 3, 5, 7, 11, 13, 17] for 17", function () {
        expect(getPrimes(17)).toEqual([2, 3, 5, 7, 11, 13, 17]);
      });
      
      it("should return [2, 3] for 3", function () {
        expect(getPrimes(3)).toEqual([2, 3]);
      });

      it ("should return [2, 3, 5, 7] for 10", function () {
        expect(getPrimes(10)).toEqual([2, 3, 5, 7 ]);
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79] for 80", function () {
        expect(getPrimes(80)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]);
      });

      it("should return [2, 3, 5] for 6", function () {
        expect(getPrimes(6)).toEqual([2, 3, 5]);
      });

      it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function () {
        expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
      });

    });

    describe("Test should check for valid inputs", function () {

      it("should return 'Invalid input' for numbers less than 2", function () {
        expect(getPrimes(1)).toEqual('Invalid input');
      });
       it("should return 'Invalid input' for numbers less than 2", function () {
        expect(getPrimes(-1)).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("a")).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("abc")).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes(-9)).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("day")).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("-")).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("/")).toEqual('Invalid input');
      });

    });
  });