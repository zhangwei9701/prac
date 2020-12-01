const fs = require('fs')

// @desc Write New Product To File of JSON Format
// @filename full path of data file store the Product 
// @content  content 
function writeToFile(filename, content){
    fs.writeFileSync(filename,JSON.stringify(content), 'utf8', (err)=>{
        if (err){
            console.log(err)
        }
    })
}

// @desc make controller easy for getting body data converted 
function getPostData(req){
    return new Promise((resolve, reject) => {
        try{
            let body = ''
            req.on('data',(chunk)=>{
                body += chunk.toString()
            })
            req.on('end', ( )=> {
                resolve(body)
            })
        }
        catch(err){
            reject(err)
        }
    })
}

module.exports ={ writeToFile, getPostData }