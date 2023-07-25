import products from '../data/products.json' assert {type: 'json'}
import {v4 as uuidv4} from 'uuid'
import {passDataToFile} from '../utils.js'

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

const remove = id =>{

    return new Promise((resolve, reject) =>{

        products = products.filter(p => p.id !== id)
        passDataToFile('./data/products.json', products)
        resolve()


    })


}

export {

    findAll,
    findById,
    create,
    update,
    remove

}