const http = require('http')

const products = require('./data/products.json')
////very quick setup, simplest server response
const server = http.createServer((req, res)=>{
    // console.log('Success!');
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<ul>David Server Response</ul>')
    // res.statusCode = 200
    // res.end()
    // setup response with JSON data back to client from our server data store
    if (req.url === '/api/products' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(products))  // Express does it for you
    }else{
        res.writeHead(404, {'Content-Type':'application/json'})
        res.end(JSON.stringify({msg:'URL Route Not Found'}))  // Express does it for you
    }
})

const PORT = process.env.PORT || 9000 

server.listen(PORT, () => console.log(`David NodeServer Running on ${PORT}`))
