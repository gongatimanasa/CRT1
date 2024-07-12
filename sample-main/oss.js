var http = require("http");
var os = require("os"); // Require the 'os' module

http.createServer(
    function (req, res) {
        // Log OS information
        console.log("Platform:", os.platform());
        console.log("CPUs:", os.cpus());
        console.log("Total Memory:", os.totalmem());
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OS information logged. Check console for details.');
    }
).listen(8080);

console.log('Server running at http://localhost:8080/');
