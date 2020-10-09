const prompt = require('prompt-sync')();

let num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);
