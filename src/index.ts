// Data types in typescript

//String
let a: string = "Hello Shyam"; //1st way to specify type of data type.

let b = <string>"Hello Dipu"; //2nd way to specify type of data type.

//Number
let c: number = 1234;

let d = <number>123;

//Boolean
let e: boolean = true;

let f = <boolean>false;

//String or Number type
let g: boolean | number = 123;

let h: string | number = "Hello Shyam";

// Alias type
type UserName = (n: number, m: number) => number;

//function in typescript
const func: UserName = (n, m) => {
  return n * m;
};

//array
const arr: number[] = [1, 2, 3, 4];

const arr1: string[] = ["shyam", "dipu", "sandi"];

const arr2: (string | number)[] = ["shyam", 2, 3];

const arr3: Array<number> = [1, 2, 3, 4];

const arr4: Array<string> = ["shyam", "dipu", "sandi"];

const arr5: Array<string | number> = ["shyam", 2, 3];
