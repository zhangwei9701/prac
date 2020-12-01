const Product = require('../models/productModel')
const { getPostData } = require('../utils')

// @desc Get All Products
// @route GET /api/products
async function getProducts(req,res){
    try{
        const products = await Product.findAll() // async / await pairs handls the Promise
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(products))  // product control inner logic here 
    }
    catch(error){
        console.log(error)
    }   
}


// @desc Get Single Product
// @route GET /api/product/:id
async function getProduct(req,res,id){
    try{
        const product = await Product.findById(id) // async / await pairs handls the Promise
        if(!product){
            res.writeHead(404, {'Content-Type':'application/json'})
            res.end(JSON.stringify({msg:'Product Not Found'}))
            // console.log(id) 
        }else {
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify(product))  // product control logic here
        }

    }
    catch(error){
        console.log(error)
    }   
}

// @desc Create Product
// @route POST /api/products
async function createProduct(req,res){
    try{
       // initialize the body, with utils 
        const body = await getPostData(req)
        const { name, description, price} = JSON.parse(body)
        const product = {
            name,
            description,
            price
        }
        //pass product to the mode to create
        const newProduct = await Product.create(product)
        res.writeHead(201, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(newProduct)) //return the new product
        //model function to create
    }
    catch(error){
        console.log(error)
    }   
}
// @desc Update Product
// @route PUT /api/products
async function updateProduct(req,res,id){
    try{
    // make sure exisiting for doing update action
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, {'Content-Type':'application/json'})
            res.end(JSON.stringify({msg:'Product Not Found'}))
        } else {
        // initialize the body, with utils 
        const body = await getPostData(req)
        const { name, description, price} = JSON.parse(body)
        const productData = {
            name: name || product.name,
            description: description || product.description,
            price: price || product.price
        }
        //pass product to the mode to update
        const updProduct = await Product.update(productData)
        res.writeHead(200, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(updProduct)) //return the new product
        //model function to update
        }

    }
    catch(error){
        console.log(error)
    }   
}

// @desc Delete Single Product
// @route DELETE /api/product/:id
async function deleteProduct(req,res,id){
    try{
        const product = await Product.findById(id) // async / await pairs handls the Promise
        if(!product){
            res.writeHead(404, {'Content-Type':'application/json'})
            res.end(JSON.stringify({msg:'Product Not Found'}))
            // console.log(id) 
        }else {
            await Product.remove(id)
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify({ message: `Product ${id} Deleted`})) 
        }

    }
    catch(error){
        console.log(error)
    }   
}
module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }