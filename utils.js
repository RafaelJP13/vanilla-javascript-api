import fs from 'fs'

const passDataToFile = (filename, content) => {

    fs.writeFileSync(filename, JSON.stringify(content), 'UTF-8', (e) => {

        if(e) console.log(e)

    })


}

const getPostRequest = req => {

    return new Promise((resolve, reject) =>{

        try{

            let body = ''
            
            req.on('data', chunk => {

                body += chunk.toString()

            })

            req.on('end', () =>{

                resolve(body)

            })

        }

        catch(e){

            reject(e)

        }
    
    })

}

export {

    passDataToFile,
    getPostRequest,

}