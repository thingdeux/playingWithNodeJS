/**
 * Created by josh on 9/11/16.
 */
function start() {
    console.log("Request handler 'start' was called")
}

function upload() {
    console.log("Request handler 'upload' was called.")
}

exports.start = start;
exports.upload = upload;