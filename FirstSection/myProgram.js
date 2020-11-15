console.log('Hello World');

let adjectiive = 'silly';

let initialMemory = process.memoryUsage().heapUsed;
let word = 'testiiing memory';

console.log(`My word is ${word}`);

let wordArray = [];

for(let i = 0; i<1000; i++){
    wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. 
            \nCurrent memory usage: ${process.memoryUsage().heapUsed}. 
            \nAfter using the loop to add elements to the array, the process is using 
            ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

