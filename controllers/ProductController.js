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

    const product = {

        title: 'Miband 4',
        description: `Full colour AMOLED touch display View call, text, and app notifications Activity and swim tracking Water resistant up to 50m*； 3-axis accelerometer, 3-axis gyroscope Up to 20 days battery* A single charge lasts up to 20 days.
        Instantly view call, text, app notifications and music in play. Keep your hands free as you keep up with life.
        Running Tracks your pace and step count Maintain a safe workout, whether you re running short or long distance.
        Swimming 5 ATM water resistant up to 50m Recognizes 5 different swim styles Records 12 data sets including swimming pace and stroke count
        Sleep monitoring Accurately tracks light and deep sleep as well as heart rate during sleep to help you adjust your sleep patterns.
        Global Verson`,
        price: 28.71

    }

    const newProduct = await Product.create(product)
    res.writeHead(201, {'Content-Type':'application/json'})
    return res.end(JSON.stringify(newProduct))

}

module.exports = {

    getProducts,
    getProduct,
    createProduct,

}