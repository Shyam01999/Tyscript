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

const arr6: [number, number, number] = [2, 3, 5]; //fixed size array

//Object

// aliasis
type Obj = {
  height: number;
  weight: number;
  gender?: boolean;
};

const obj: Obj = {
  height: 111,
  weight: 222,
  gender: true,
};

const obj1: Obj = {
  height: 222,
  weight: 222.3,
  gender: false,
};

const obj3: Obj = {
  height: 222,
  weight: 222.3,
};

//It is used to add more properties type to the object

// type funcType = (n:number, m:number) => void;

// interface NewObj extends Obj {
//   scholar : boolean,
//   func:funcType
// }

// const obj4:NewObj = {
//   height:222,
//   weight:344,
//   scholar:true,
//   func:(n, m) => {
//     console.log(n * m);
//   }
// }

// type funcType = (n: number, m: number, l?: number) => number;

// const funct: funcType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;

//   return n * m * l;
// };

// funct(10, 20);

//Rest Operator
// type FuncType = (...m: number[]) => number[];

// const func1: FuncType = (...m) => {
//   return m;
// };

// func1(1, 2, 3, 4, 5);

// function lol(n:number){
//   return n
// }

// lol(23)

type funcType = (n: number) => number;

const lol: funcType = function lol(n) {
  return n;
};

//function with Obj

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getDataType: GetDataType = (product) => {
//   console.log(product)
// };

// const productOne:Product = {
//   name:"Marco",
//   stock:1,
//   price:2,
//   photo:"sample photo url",
//   id:"dssdsdsds"
// }

// getDataType(productOne)

//Never Type
type themeMode = "light" | "dark";

const errorHandler = (): never => {
  throw new Error();
};

const mode: themeMode = "dark";
