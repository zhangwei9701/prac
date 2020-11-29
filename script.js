//https://developer.mozilla.org/en-US/docs/Web/API/Console
// console.error('error example');
// console.warn('this is warnning');
// var someObject = { str: "Some text", id: 5 };
// console.log(someObject);

// see pra1.js for more about var, let const usages and differences

//data type exploration
// String, Numbers, Boolean, null, undefined, Symbol

const name = 'David';
const age = 41;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
const habit = 'football';
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof rating);

//String concatenation
console.log('My name is ' + name + ' and I am ' + age);
//ES6, template string, using backticks
console.log(`My name is ${name} and I am ${age}`);
console.log(`my rating is ${rating} and I am very fun of ${habit}!`);

//string methods, property 
console.log(habit.length);
console.log(habit.toUpperCase().substring(0,4)); //FOOT
console.log(habit.split(''));
const ss = 'title, name, dav, tddd'
console.log(ss.split(','));// powerfull method in lots of real cases

//Arrays are bacically varialbes that hold multiple values
const numbers = new Array(1,2,3,4,5,6,7,7,7,7);
console.log(numbers);
const fruits = ['apples','oranges','pears', 100, true];
console.log(fruits[0]);
fruits[6] = 'grapes' // you might not konw how many in Array, so not very helpful in real case
console.log(fruits);
fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries'); // insert as the first element in Array
console.log(fruits);
fruits.pop() // pop off the last element in Array
console.log(fruits);
//To see sth is Array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf(100));
////those are common methods in Array *************** //*****//****//Concatenate arrays, sth like that, check it later on


///object literals, key value pairs
const person = {
    firstName: 'Jo',
    lastName: 'Mac',
    age: 23,
    hobbies: ['music','it','movies','sports'],
    address:{
        street: '646, Ave',
        city: 'NewY',
        state: 'US'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.state);

//***//**let us look at destructing, very useful in real case, to pull out the objectvalue from object
const { firstName,lastName, address:{city} } = person; //pulling out the person object
console.log(firstName,lastName,city);
// add property into person object litteral.
person.email = 'dav.dd@gg.com'
console.log(person);
//// For many cases, you will be dealling with Arrays and Objects

const todos =[
    {
        id:1,
        text:'some text',
        isCompleted: true
    },
    {
        id:2,
        text:'new text',
        isCompleted: true
    },
    {
        id:3,
        text:'text more',
        isCompleted: false
    }
];
console.log('todos is: ',todos[2].text);  //taking out text more

//convert this todos Array with our own codes, then ready to sendback our server, sth like that~~~
//simple and easy way   https://www.freeformatter.com/json-formatter.html
const todoJSON = JSON.stringify(todos); // one simple way call JSON.stringify(array)
console.log(todoJSON);  //we confirmed get a json string
// ///**********///////////////


