const { expect } = require('chai');
const Calculator = require("../calculator");

describe('Calculator functionality tests', () =>
{
    const calculator = new Calculator();
    it('add(): Should return the sum of the numbers passed to the method', async()=>{
        let result = calculator.add([10,15,20]);
        expect(result).to.equal(45);
    });
    it('add(): Return type should be a number', async()=>{
        let result = calculator.add([1,2,3]);
        expect(typeof(result)).to.equal(typeof(1));
    });

    it('multiply(): Should return the multiply result of the numbers passed to the method', async()=>{
        let result = calculator.multiply([5,10,20]);
        expect(result).to.equal(1000);
    });
    it('multiply(): Return type should be a number', async()=>{
        let result = calculator.multiply([4,7,11]);
        expect(typeof(result)).to.equal(typeof(1));
    });

    it('subtraction(): Should return the result of subtraction numbers passed to the method', async()=>{
        let result = calculator.subtraction(100,31);
        expect(result).to.equal(69);
    });
    it('subtraction(): Return type should be a number', async()=>{
        let result = calculator.subtraction(15,30);
        expect(typeof(result)).to.equal(typeof(1));
    });

    it('divide(): Should return the result of division numbers passed to the method', async()=>{
        let result = calculator.divide(99,3);
        expect(result).to.equal(33);
    });
    it('divide(): Return type should be a number', async()=>{
        let result = calculator.divide(4,3);
        expect(typeof(result)).to.equal(typeof(1));
    });
    it('divide(): The result of division by 0 should be infinity', async()=>{
        let result = calculator.divide(33,0);
        expect(result).to.equal(Infinity);
    });

    it('exponentiation(): Should return the result of exponentiation number passed to the method', async()=>{
        let result = calculator.exponentiation(15);
        expect(result).to.equal(225);
    });
    it('exponentiation(): Return type should be a number', async()=>{
        let result = calculator.exponentiation(4);
        expect(typeof(result)).to.equal(typeof(1));
    });



})