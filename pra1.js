// function sya(){
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   //console.log(i);
// }

// sya();
// // var -->  
// // let --> block
// // const --> block
// function letsya(){
//   for (let a = 0; a < 5; a++) {
//     console.log(a);
//   } 
//   //console.log(i);
// }

// letsya();

// const x =1;
// //x=2;

// //object in js, are collection of key:value par
// const person = {
//   name: "david",
//   walk: function(){}, //method
//   talk(){} // bacially, we drop the method of : and key word function, shorten the key:value par
// };

// person.talk();

// const targeMember = 'name';
// // person.['name'] = 'wei';
// // person.[targeMember.value] = 'wei'; 

//this key word in js

const person ={
  name: 'wei',
  walk() {
    console.log(this);
  }
}
person.walk();  // this returens the reference of current object

const walk = person.walk
walk();  //by default get reference of global object, in this case window objec
// howerver, strick model enabled, reture the undefined.
//in js, function is object, walk.bind() function fix problem/

//arraw function
const dffo = function(n1,n2){ 
  return n1 * n2;
}
const dfn = (n1,n2) => n1 * n2;

const dffn = number => number * number;

// useful scenario
const phones = [
  {owner: 'david', type: 'iphone 12'},
  {owner: 'james', type: 'iphone 11'},
  {owner: 'jo', type: 'iphone x'},
]
phones.filter(function(phones) { return phones.owner === 'david'});
phones.filter(phones => phones.owner === 'david');

// arrow function do not rebind this
// case1
const me = {
  tell(){
    console.log("this",this);
  }
}
me.tell(); // reference of me object
const newme = {
  tell(){
   setTimeout(function(){
    console.log("this",this);
   }, 1000);
  }
}
newme.tell(); // window object, as callback fun is stand alone
const newarrme = {
  tell(){
   setTimeout(() => {
     console.log("this",this);
    }, 1000);
  }
}
newarrme.tell(); // this is not reset, this inherit from the context this defined,coooooool :)

//map method, render the list of items, very powerful in React 
const colors = ['red','green','black','orange'];
colors.map(function(color){
  return '<li>' + color + '</li>';
});
const items = colors.map(color => '<li>' + color + '</li>');
const nitems = colors.map(color => `<li>${color}</li>`); // template literals es6, backtick character

//object destructing
const names = {
  first: 'ddd',
  second: 'www',
};

// const first = names.first;
// const second = names.second;
//prlb is little bit tedious, destructing solve this tedious issue
const { first, second } = names;  //destructing syntax
const { first: fst } = names;  //destructing syntax

//spread operator, combin these two arrys
const  ary1= [1,2,3,4];
const  ary2=[3,4,6,5];
const combined = [...ary1, 'addone', ...ary2, 'addtwo'];
const cloned = [...first];

//combin objects
const obj1 = {
  1:'test'
};
const obj2 = {
  2: 'anothertest'
};
const combinobj = {...obj1, ...obj2, 3:"combtest"};
console.log(combinobj);

//class in js 
// const teru ={
//   id:1,
// };
class Teru {
  constructor(id){
    this.id=id;
  }    
  run(){
        console.log("run");
      }
}
const teru = new Teru(1);
teru.run();

