"use strict";
// Data types in typescript
//String
let a = "Hello Shyam"; //1st way to specify type of data type.
let b = "Hello Dipu"; //2nd way to specify type of data type.
//Number
let c = 1234;
let d = 123;
//Boolean
let e = true;
let f = false;
//String or Number type
let g = 123;
let h = "Hello Shyam";
//function in typescript
const func = (n, m) => {
    return n * m;
};
//array
const arr = [1, 2, 3, 4];
const arr1 = ["shyam", "dipu", "sandi"];
const arr2 = ["shyam", 2, 3];
const arr3 = [1, 2, 3, 4];
const arr4 = ["shyam", "dipu", "sandi"];
const arr5 = ["shyam", 2, 3];
const arr6 = [2, 3, 5]; //fixed size array
const obj = {
    height: 111,
    weight: 222,
    gender: true,
};
const obj1 = {
    height: 222,
    weight: 222.3,
    gender: false,
};
const obj3 = {
    height: 222,
    weight: 222.3,
};
const lol = function lol(n) {
    return n;
};
const errorHandler = () => {
    throw new Error();
};
const mode = "dark";
//public class and object
// class Player {
//   height;
//   weight;
//   constructor(height:number, weight:number){
//     this.height = height;
//     this.weight = weight;
//   }
// }
// const abhi = new Player(100, 200);
// console.log(abhi.weight)
//To access the private property outside the class in this way.
// class Player {
//   public height;
//   private weight;
//   constructor(height:number, weight:number){
//     this.height = height;
//     this.weight = weight;
//   }
//   getWeight = () => this.weight;
// }
// const Rakesh = new Player(150, 300);
// console.log(Rakesh.getWeight());
//In class we can declare public, private, protected member properties and can access outside using this way.
//By default all properties are public
//Private members are only acessible with the same class
//Protected members are only acessible with the subclass or child class that extenda the parent class.
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getWeight = () => this.weight;
    }
}
const Tusar = new Player(120, 130, 140);
// console.log(Tusar.getPower())
