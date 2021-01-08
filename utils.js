const fs = require('fs')

const passDataToFile = (filename, content) => {

    fs.writeFileSync(filename, JSON.stringify(content), 'UTF-8', (e) => {

        if(e) console.log(e)

    })


}

module.exports = {

    passDataToFile

}