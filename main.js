const companies = [
    {name: "Nokia", category:"Tecl comm", start:1864, end: 2020},
    {name: "Google", category:"High Tec", start:1994, end: 2008},
    {name: "Fake Apple", category:"Wood", start:1678, end: 1760},
    {name: "Fake Orange", category:"Wood", start:1678, end: 1760},
    {name: "Fake EDW", category:"Wood", start:1980, end: 1999},
    {name: "True Apple", category:"Wood", start:1990, end: 2021},
    {name: "Ture Orange", category:"Wood", start:1678, end: 2015},
    {name: "MS", category:"Wood", start:1992, end: 2008},
    {name: "TATA", category:"High Tec", start:1992, end: 2002},
];

const ages = [14,23,10,34,54,56,22,21,57,77,12,34,50,26,24,26,21,24,42,35,45,42,40];
// you will see high ranking function is much powerful to munupulate array
//forEach, better way to loop array data
//stand for loop, it's bit tedious, too much 

// for(let i= 0; i< companies.length; i++){
//     console.log(companies[i]);
// }

//forEach, callback function is sync
//callback taks 3 things, iterator, idenx, and whole array
companies.forEach(function(company, index, companies){
    console.log(index, company.name);
});

//much better, nice and understandalbe without doing lots of i

//filter
//fillter things out from the array
    //see for loop to compare with filter
let areAduit =[];
for (let i=0; i<ages.length; i++){
    if (ages[i] > 18){
        areAduit.push(ages[i]);
    }
}
console.log(areAduit);
//let us refactor it with filter

const ageAudit = ages.filter(function(age, index){
    if(age >= 18){
        return true;
    }
});
console.log(ageAudit);

const arrayAudit = ages.filter((age,index) => age >= 18);
console.log(arrayAudit)

////*********this is much nice and elegent way of filter throuh the array
////*********you shall use arrow function instead of function(){} ***/

const highTecCompanies = companies.filter((company, index) => company.category === 'High Tec');
console.log(highTecCompanies);
//is that cool with arrow functions

//Get older companies
const olderCompanines = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(olderCompanines);

//Get company for last 10 years or more
const lastTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastTenYears);
/// this is M* F*** easy and elegent 

////***///map, creating new array from current array, see examples below

const comName = companies.map(function(company){
    return company.name;
});
//do what ever pretty much we want for new array based on 
console.log(comName);

const testMap = companies.map((iteam) => `${iteam.name} [${iteam.start} - ${iteam.end}]`);

console.log(testMap);

// take one or mutiple array, map to new array based on some logics
const ageChanged = ages
    .map((age, index)=> age * 2 + index)
    .map(age => age * 0.1);
console.log(ageChanged);
// map is very powerful, map much more logic

//sort, taking array, sorting into new array

// const sortCom = companies.sort(function(a,b){
//     if(a.start > b.start){
//         return 1;
//     } else{
//         return -1;
//     }
// });
// const sortCom = companies.sort((a,b) => {a.start > b.start ? 1 : -1});
// // console.log(sortCom);
// console.log(sortCom);

// const sortAges = ages.sort();  //wrong
// const sortAgesCorrect = ages.sort((a,b)=> a - b); //correct
// console.log(sortAgesCorrect);

//last but not least, reduce
//reduce can be little complicated in some cases
//reduce code snipts

let ageSum =0;
for(let i=0; i < ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);
//then, let us refactor with reduce
const sumReducer = ages.reduce(function(total, age){
    return total + age;
},0);
console.log(sumReducer);
//refactor, with arrow func
const sum = ages.reduce((total,age)=> (total + age),0);
console.log(sum);

//get total years for each companies, do not forget the starting number 0
// const totalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start)
// },0); 
//refactor to arrow reducer
const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);
console.log(totalYears);

const complicatedResult = ages
.map(age => age * 2)
.filter(age => age => 36)
.sort((a,b) => b - a)
.reduce((total, age) => total + age, 0);

console.log(complicatedResult);
