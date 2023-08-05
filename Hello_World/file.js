const fs = require('fs')
const os = require('os')
console.log('cpus',os.cpus.length)
console.log(1)
fs.readFile('contacts.txt','utf-8',(err,res)=>{
    if(err) {
        console.log(err)
    }
    else {
        console.log(res)
    }
})
// console.log(res)
console.log(2)
console.log(3)
console.log(4)