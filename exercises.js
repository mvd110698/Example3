//3-1

//Use the reduce method in combination with the concat method to “flatten” an array of arrays into
// a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(list){
    return list.reduce((previousValue,currentValue)=>previousValue.concat(currentValue))

}

//output value of the flattening function
console.log(flattening(arrays))

//3-2
//Write a higher-order function loop that provides something like a for loop statement. 
//It takes a value, a test function, an update function, and a body function. 
//Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
//Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and starts from the beginning.
//When defining the function, you can use a regular loop to do the actual looping.

export function loop(value,test,update,body){
    for(let curValue=value; test(curValue);curValue=update(curValue)){
    body(curValue);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//3-3 and 3-4
//Analogous to the some method, arrays also have an every method.
//This one returns true when the given function returns true for every element in the array.
//In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

//Implement two versions of every (everySome and everyLoop) as a function that takes an array and a 
//predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.

function everyLoop(array, test) 
{
  let returnValue=true
  for(let item of array){
    returnValue=returnValue&&test(item)
  }
  return returnValue
}

function everySome(array, test) 
{
return !array.some(item=>{
 
  console.log("Applying the test to " +item+ " with result " +test(item))
  
if(!test(item)){
  console.log("There is an item that does not meet the test requirements")
}
  return !test(item)}) 
} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

