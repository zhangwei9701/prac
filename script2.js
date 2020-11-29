const x = 100; 
///always matchs the type with === might be good practices
// if ( x === 100 ) {
//     console.log('x is 100');
// }else{
//     console.log('x is Not 100');
// }
if (x === 50) {
    console.log('x is 50');
} else if ( x > 50 ){
    console.log('x is larger then 50');
} else{
    console.log('x is less then 50');
}

//shor hand statement of if else
const color = x >= 100 ? 'red' :  'blue';
console.log(color);
//best use switch than nest if else
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is Not read,Not blue');
        break;
}


// construct object, with constructor function
// constructor is so obverious 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiated object
const personDavid = new Person('david','mei','11-11-2020');
console.log(personDavid);
console.log(personDavid.getBirthYear())
console.log(personDavid.getFullName());
//Add method to above object

//Let talk about prototypes, that is where js object methods comes from
Person.prototype.getPersonMethod = function(){
    return 'getPersonMethod Called'
}
console.log(personDavid.getPersonMethod());


//Here stating below, we look at the ES6 added of classses
//prety much the syntax sugar....

//we use class to write the same Person object as above pure functional way
class Per{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
const perDavid = new Per('david','mei','11-11-2020');
console.log(perDavid);
/////////////////////////
///////DOM

