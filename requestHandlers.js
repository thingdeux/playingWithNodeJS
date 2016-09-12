/**
 * Created by josh on 9/11/16.
 */
function start(request, response) {
    console.log("Request handler 'start' was called")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World START");
    response.end();
}

function upload(request, response) {
    console.log("Request handler 'upload' was called.")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World UPLOAD");
    response.end();
}

exports.start = start;
exports.upload = upload;