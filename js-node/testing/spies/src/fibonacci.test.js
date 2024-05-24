const assert = require('assert');
const sinon = require('sinon');

const Fibonacci = require('./fibonacci');

// Fibonacci o próximo valor corresponde a soma dos dois valores anteriores
;(async () => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        for(const i of fibonacci.execute(4)) {
            // console.log(i)
        }
        const expectedCallCount = 5;
        assert.deepStrictEqual(spy.callCount, expectedCallCount);
    }

    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        const [...results] = fibonacci.execute(5);
        // console.log(...results)
        const { args } = spy.getCall(2);
        const expectedResult = [0, 1, 1, 2, 3];
        const expectedParams = Object.values({
            input: 3,
            current: 1,
            next: 2
        });

        assert.deepStrictEqual(args, expectedParams);
        assert.deepStrictEqual(results, expectedResult);
    }
})();