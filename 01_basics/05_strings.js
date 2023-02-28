const name ="padip"
const repoCount =50

//console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pradip-B')
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('d'))


const newString = gameName.substring(0,4)
console.log(newString);

const anotherStrig = gameName.slice(-6,4)
console.log(anotherStrig);

const newStringOne = "  pradip  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pradip.com/pradip%20bhattacharjya"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));