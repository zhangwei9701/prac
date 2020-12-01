const http = require('http')
//move const products to models, where we dealling the data
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productsController')
//de-structuring, bring in our controllers 

////direct quick setup, simplest server response
const server = http.createServer((req, res)=>{
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<ul>David Server Response</ul>')
    // res.statusCode = 200
    // res.end()
    // setup response with JSON data back to client from our server data store
    if (req.url === '/api/products' && req.method === 'GET'){
        getProducts(req,res) // pass these req,res into controller, controller knows how to deal with these
        // res.writeHead(200, {'Content-Type':'application/json'})
        // res.end(JSON.stringify(products))  // Express does it for you
        // above are controller logics, refactor to controllers where we dealing such
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method ==='GET'){
        const id = req.url.split('/')[3]  // route partern: api/products/1
        getProduct(req,res,id)
    }
    // POST request of products
    else if (req.url === '/api/products' && req.method === 'POST'){
        createProduct(req,res)
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method ==='PUT'){
        const id = req.url.split('/')[3]  // route partern: api/products/1
        updateProduct(req, res, id)
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method ==='DELETE'){
        const id = req.url.split('/')[3]  // route partern: api/products/1*
        deleteProduct(req, res, id)
    }
    else{
        res.writeHead(404, {'Content-Type':'application/json'})
        res.end(JSON.stringify({msg:'URL Route Not Found'}))  // Express does it for you
    }
})

const PORT = process.env.PORT || 9000 

server.listen(PORT, () => console.log(`David NodeServer Running on ${PORT}`))
