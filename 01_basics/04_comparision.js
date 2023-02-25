//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);


console.log("2" > 1);
console.log("02" > 1);

/*
The reason is that an equality check == and compaisons><>=<=work differently.
Comparisons convert null to a number, treating it as 0.
Thats why(3)null>=0 is true and (1)null > 0 is falsw.
*/
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//===

console.log("2"===2);

