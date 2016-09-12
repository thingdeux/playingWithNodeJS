/**
 * Created by josh on 9/11/16.
 */
var formidable = require("formidable"),
    http = require("http"),
    url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // Handle Any post parameters and call route when finished.
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;