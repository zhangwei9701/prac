let products = require('../data/products.json')
const { v4: uuidv4 } = require('uuid') 
const { writeToFile } = require('../utils')

function findAll(){
    //as it is getting data, so let us returen a Promise
    return new Promise((resolve,reject) => { 
        resolve(products)
    })
}

function findById(id){
    //as it is getting data, so let us returen a Promise
    return new Promise((resolve,reject) => { 
        const product = products.find((value) => value.id === id)
        // console.log(resolve(product))
        resolve(product)
    })
}

function create(product){
    //returen a Promise
    return new Promise((resolve,reject) => { 
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeToFile('./data/products.json', products) 
        resolve(newProduct)
    })
}

function update(product, id){
    //returen a Promise
    return new Promise((resolve,reject) => { 
        const index = products.findIndex((value)=>value.id === id)
        products[index] = {id,...product}
        writeToFile('./data/products.json', products) 
        resolve(products[index])
    })
}

function remove(id){
    //returen a Promise
    return new Promise((resolve,reject) => { 
        products = products.filter((value)=> value.id != id)
        writeToFile('./data/products.json', products) 
        resolve()
    })
}

module.exports = { findAll, findById, create, update, remove }