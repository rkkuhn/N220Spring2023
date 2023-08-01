



var name = prompt("enter the elememts of arrays: ")
const array = name.split(" ")
const intarray = []
var sum = 0

for(let i=0; i<array.length ;i++){
    intarray[i] = parseInt(array[i]);
    sum = sum + intarray[i];
}

average = sum/intarray.length;
console.log("The average is: "+average);
console.log("The sum is: "+ sum);

console.clear();