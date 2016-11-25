//Lets require/import the HTTP module
var http = require('http');
var redis = require('redis');
var client = redis.createClient({host: "redis"});

client.on("error", function (err) {
    console.log("Error " + err);
});
//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    client.incr("string key");
	client.get("string key", function(err, c){
		console.log({c: c})
    	response.end('It Works!! Path Hit: ' + request.url + ' - ' + c);
	});
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
