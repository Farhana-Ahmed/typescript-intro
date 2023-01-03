"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonStreetNo = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    return age >= 35;
}
exports.isOld = isOld;
function countOdd(input) {
    return input.filter(i => i % 2 === 1).length;
}
exports.countOdd = countOdd;
function sumEven(input) {
    return input.filter(i => i % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}
exports.sumEven = sumEven;
function getPersonStreetNo(p) {
    return p.address.streetNo;
}
exports.getPersonStreetNo = getPersonStreetNo;
