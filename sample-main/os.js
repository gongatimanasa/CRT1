var http=require("http")
var os = require("os");
http.createServer(
    function (req,res){
        console.log(os.platform());
        console.log(os.cpus());
        console.log(os.totalmem());
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end();

    }
).listen(8080)
