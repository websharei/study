var http = require('http');

http
.createServer(function(request, respone){
	respone.end("<h1>Hello World!</h1>");
})
.listen(8080, function(){
	console.log("Server Running...");
});