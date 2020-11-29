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


//construct object, with constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiated object
const personDavid = new Person('david','mei','11-11-2020');
console.log(personDavid);