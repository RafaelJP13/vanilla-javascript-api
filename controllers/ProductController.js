const Product = require('../models/Product')

async function getProducts(req, res){

    try{

        const products = await Product.findAll()

        res.writeHead(200, {'Content-Type': 'application/json'})                                                                                                                                                                             
        res.end(JSON.stringify(products))

    } catch(e){

        console.log(e)

    }

}

async function getProduct(req, res, id){

    try{

        const product = await Product.findById(id)

        if(!product){

            res.writeHead(404, {'Content-Type':'application/json'})
            res.end(JSON.stringify({message:'Product not found!'}))
        }

        else{

            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))

        }
        
    }

    catch(e){

        console.log(e)

    }

}


async function createProduct(req, res){

    try{
        let body = ''

        req.on('data', chunk => {

            body += chunk.toString();

        })

        req.on('end', async () =>{

            const {title, description, price} = JSON.parse(body)

            const product = {

                title,
                description,
                price

            }

            const newProduct = await Product.create(product)
            res.writeHead(201, {'Content-Type':'application/json'})
            return res.end(JSON.stringify(newProduct))

            
        })
    }

    catch(e){


    }

}

module.exports = {

    getProducts,
    getProduct,
    createProduct,

}