"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe('ts tests', () => {
    it('get greeting', () => {
        const birthYear = 1972;
        const name = 'Marcus';
        const result = (0, index_1.greet)(name, birthYear);
        assert_1.default.strictEqual(result, 'Hello Marcus, you are 51 years old');
    });
    it('returns true if agr is above 35', () => {
        const is34Old = (0, index_1.isOld)(34);
        const is35Old = (0, index_1.isOld)(35);
        const is36Old = (0, index_1.isOld)(36);
        assert_1.default.strictEqual(is34Old, false);
        assert_1.default.strictEqual(is35Old, true);
        assert_1.default.strictEqual(is36Old, true);
    });
    it('fun with variables', () => {
        const name = 'Marcus';
        const nameImplicit = 'Marcus';
        const nameImplicit2 = name;
        const cool = true;
        const birthYear = 1972;
        assert_1.default.strictEqual(typeof (cool), 'boolean');
        assert_1.default.strictEqual(typeof (birthYear), 'number');
        assert_1.default.strictEqual(typeof (name), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit2), 'string');
    });
    // it('arrays are typed in ts', () => {
    //   const names : string[] = ['Marcus', 'Julia', 'Cathrine'];
    //   const firstFive = [1, 2, 3, 4, 5]
    // });
    it('count odd numbers', () => {
        const firstFive = [1, 2, 3, 4, 5];
        const numberOfOdds = (0, index_1.countOdd)(firstFive);
        assert_1.default.strictEqual(numberOfOdds, 3);
    });
    it('sum of even numbers', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sum = (0, index_1.sumEven)(nums);
        assert_1.default.strictEqual(sum, 30);
    });
    it('gets the street number of a person', () => {
        const p = {
            name: 'Marcus',
            birthYear: 1972,
            address: {
                street: 'Strålgatan',
                streetNo: 23,
                city: 'Stockholm',
            },
        };
        const streeNo = (0, index_1.getPersonStreetNo)(p);
        assert_1.default.strictEqual(streeNo, 23);
    });
});
