const products = require('../data/products.json')
const {v4:uuidv4} = require('uuid')


const findAll = () => {

    return new Promise((resolve, reject) => {

        resolve(products)

    })
}

const findById = id => {

    return new Promise((resolve, reject) => {
        
        const product = products.find(p => p.id === id)
        resolve(product)

    })

}

const create = product => {

    return new Promise((promise, resolve) => {

        const newProduct = {id:uuidv4(),...product}
        products.push(newProduct)
        
    })


}

module.exports = {

    findAll,
    findById,
    create,

}