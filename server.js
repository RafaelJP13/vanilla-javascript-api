const http = require('http')
const ProductController = require('./controllers/ProductController')

const server = http.createServer((req, res) => {

    if(req.url == '/api/products' && req.method == 'GET'){

        ProductController.getProducts(req, res)
        
    }

    else {

        res.writeHead(400, {'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Route Not Found'}))
   
    }


})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}!`))