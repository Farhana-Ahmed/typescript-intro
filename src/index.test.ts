import 'mocha';
import assert from 'assert';

import {
  greet, isOld, countOdd, sumEven, Person, getPersonStreetNo,
} from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    const birthYear = 1972;
    const name = 'Marcus';

    const result = greet(name, birthYear);

    assert.strictEqual(result, 'Hello Marcus, you are 51 years old');
  });

  it('returns true if agr is above 35', () => {
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);

    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });

  it('fun with variables', () => {
    const name : string = 'Marcus';
    const nameImplicit = 'Marcus';
    const nameImplicit2 = name;

    const cool : boolean = true;
    const birthYear = 1972;

    assert.strictEqual(typeof (cool), 'boolean');
    assert.strictEqual(typeof (birthYear), 'number');
    assert.strictEqual(typeof (name), 'string');
    assert.strictEqual(typeof (nameImplicit), 'string');
    assert.strictEqual(typeof (nameImplicit2), 'string');
  });
  // it('arrays are typed in ts', () => {
  //   const names : string[] = ['Marcus', 'Julia', 'Cathrine'];
  //   const firstFive = [1, 2, 3, 4, 5]
  // });
  it('count odd numbers', () => {
    const firstFive = [1, 2, 3, 4, 5];
    const numberOfOdds = countOdd(firstFive);
    assert.strictEqual(numberOfOdds, 3);
  });

  it('sum of even numbers', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sum = sumEven(nums);

    assert.strictEqual(sum, 30);
  });

  it('gets the street number of a person', () => {
    const p: Person = {
      name: 'Marcus',
      birthYear: 1972,
      address: {
        street: 'Strålgatan',
        streetNo: 23,
        city: 'Stockholm',
      },
    };

    const streeNo = getPersonStreetNo(p);

    assert.strictEqual(streeNo, 23);
  });
});
