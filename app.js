const http=require("http")

http.createServer((req,res)=>{
    res.statusCode=200
    console.log("response triggered")
    res.write("Response Ended Sucessfully")
    res.end()
}).listen(3000)