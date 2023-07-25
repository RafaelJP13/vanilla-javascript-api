import {findAll, findById, create, update, remove} from '../models/Product.js'
import {getPostRequest} from '../utils.js'

async function getProducts(req, res){

    try{

        const products = await findAll()

        res.writeHead(200, {'Content-Type': 'application/json'})                                                                                                                                                                             
        res.end(JSON.stringify(products))

    } catch(e){

        console.log(e)

    }

}

async function getProduct(req, res, id){

    try{

        const product = await findById(id)

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

        const newProduct = await create(product)
        res.writeHead(201, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(newProduct))


    }

    catch(e){

        console.log(e)

    }

}

async function updateProduct(req, res, id){

    try{

        const product = await findById(id);

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

            const updateProduct = await update(id, productData) 

            res.writeHead(200, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify(updateProduct))

        }

    }

    catch(e){

        console.log(e)

    }

}

async function deleteProduct(req, res, id){

    const product = findById(id);

    if(!product){

        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message:'Product Not Found!'}))

    }

    else{

        await remove(id)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message:`Product ${id} removed!`}))

    }

}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}