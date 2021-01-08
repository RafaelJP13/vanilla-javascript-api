const Product = require('../models/Product')
const {getPostRequest} = require('../utils')

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
        
        const body = await getPostRequest(req)

        const {title, description, price} = JSON.parse(body)

        const product = {

            title,
            description,
            price

        }

        const newProduct = await Product.create(product)
        res.writeHead(201, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(newProduct))


    }

    catch(e){

        console.log(e)

    }

}

async function updateProduct(req, res, id){

    try{

        const product = await Product.findById(id);

        if(!product){

            res.writeHead(404, {"Content-Type": 'application/json'})
            res.end(JSON.stringify({message: 'Product Not Found!'}))

        }

        else{

            const body = await getPostRequest(req)

            const {title, description, price} = JSON.parse(body)

            const productData = {

                title: title ||	product.title,
                description: description ||	product.description,
                price: price ||	product.price

            }

            const updateProduct = await Product.update(id, productData) 

            res.writeHead(200, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(updateProduct))

        }

    }

    catch(e){

        console.log(e)

    }

}

async function deleteProduct(req, res, id){

    const product = Product.findById(id);

    if(!product){

        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message:'Product Not Found!'}))

    }

    else{

        await Product.remove(id)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message:`Product ${id} removed!`}))

    }

}

module.exports = {

    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}