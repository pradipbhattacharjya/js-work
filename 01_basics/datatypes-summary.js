//# primitive

//  7 types: String, Number, Boolearn, null, undefinde, Symbol, BingInt

const score =100
const scorevalue = 100.3

const isoggedIn = false
const outsideTemp= null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 2334423343445n
// Reference (Non primitive)

// Array, Objects,Functions

const heros = ["shakiman","naagraj","doga"]
let myObj={
    name: "pradip",
    age:22,
   
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);



/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object






*/