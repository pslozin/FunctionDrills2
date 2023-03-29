////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE

const multiply = (numb1,numb2,func) =>{

  
  console.log("Real Answer is", func(numb1,numb2))

}

const phil =(n1,n2) =>{
  return n1 * n2
  //console.log(`Answer is ${i}`)
}

multiply(7,6,phil)



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// multiply(4, 7, answer => {
//   console.log('The answer is ' + answer) //should console.log 12
// })






////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Zig']
// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 

const first = (arry,clbFunc) =>{
  clbFunc(arry)
}

const sayName = (nameArr) =>{
  console.log(nameArr[0])
}

first(names,sayName)


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE

const last = (arry,lstName) =>{

  lastName(arry)


}

const lastName = (arry) =>{
  let i = arry.length - 1 

  console.log(`Last name in ARRAY is ${arry[i]}`)

}

last(names,lastName)

//lastName(names)

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 

const contains = (arry,name,callFunc) =>{

  let t=0
  for(i = 0; i < arry.length; i ++)
  console.log(arry[i])
  if (arry[i] === name){
  t = 1
  }
  else
  {
  t = 0
  }
  callFunc(t)

}

const tru = (i) =>{
  if (i === 0)
  console.log("FALSE")
  else if (i === 1)
  console.log("TRUE")

}

contains(names,"Colt",tru)


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Zig', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE

nameslong = ['Bill', 'Elliot', 'Philip', 'Joe', 'Alex','Malcolm','Garry', 'Jan','Alex']

const uniq = (arry, callback) =>{

  for(i = 0; i < arry.length; i ++){
    for(j = 1; j < arry.length; j++){    
      console.log(arry[i],arry[j]) 
      
      if (arry[i] === arry[j]){
        
      //arry.splice(i,j);

    }
  }
}

console.log(arry)
}

const empty = () =>{

}

uniq(nameslong,empty)

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 

const each = (arry,callback) =>{

  for(i = 0; i < arry.length; i ++)
  {
    callback(arry[i],i)
  }

}

const nameIndex = (name,indx) =>{

  console.log(`Name ${name} and index ${indx}`)


}

each(nameslong,nameIndex)


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE





////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

const addingFactory = (number) =>{
  
  return funcReturn(number)
  // {
  //   return "i"
  // }

}

const funcReturn = (number) =>
{

  return number

}
console.log(addingFactory(8) + addingFactory(5))
console.log(addingFactory(8) + funcReturn(9))
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })