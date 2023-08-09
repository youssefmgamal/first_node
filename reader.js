let fs = require("fs")

fs.readFile('welcome.txt',(err,data)=>{
if(err){
    return console.log(err);
}

console.log(data.toString());

})