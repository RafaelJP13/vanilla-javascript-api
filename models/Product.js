const products = require('../data/products.json')
const {v4:uuidv4} = require('uuid')
const {passDataToFile} = require('../utils')

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

    return new Promise((resolve, reject) => {

        const newProduct = {id:uuidv4(),...product}
        products.push(newProduct)
        passDataToFile('./data/products.json', products)
        resolve(newProduct)
        
    })

}

const update = (id, product) => {

    return new Promise((resolve, reject) =>{

        const index = products.findIndex(p => p.id === id)
        products[index] = {id, ...product}
        passDataToFile('./data/products.json', products)
        resolve(products[index])

    })

}

module.exports = {

    findAll,
    findById,
    create,
    update,

}