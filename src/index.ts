function greet(name: string, birthYear: number) : string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

type Address = {
  street: string,
  streetNo: number,
  city: string,
};

  type Person = {
    name: string,
    birthYear: number,
    address: Address
  };

function isOld(age: number) : boolean {
  return age >= 35;
}

function countOdd(input : number[]) : number {
  return input.filter(i => i % 2 === 1).length;
}

function sumEven(input : number[]) : number {
  return input.filter(i => i % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

function getPersonStreetNo(p: Person) : number {
  return p.address.streetNo;
}

export {
  greet, isOld, countOdd, sumEven, Address, Person,
  getPersonStreetNo,
};
