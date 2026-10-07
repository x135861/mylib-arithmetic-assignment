import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../mylib.js';

describe('mylib arithmetic functions', function () {
    before(function () {
        console.log('Starting mylib unit tests');
    });

    after(function () {
        console.log('Finished mylib unit tests');
    });

    it('adds two numbers', function () {
        expect(add(2, 3)).to.equal(5);
    });

    it('subtracts two numbers', function () {
        expect(subtract(10, 4)).to.equal(6);
    });

    it('multiplies two numbers', function () {
        expect(multiply(6, 7)).to.equal(42);
    });

    it('divides two numbers', function () {
        expect(divide(20, 4)).to.equal(5);
    });

    it('throws an error when dividing by zero', function () {
        expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
});