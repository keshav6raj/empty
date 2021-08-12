const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(request, response) {
    console.log(request.url);
    response.writeHead(200, { 'content-type': 'text/html' }  );
    fs.readFile('./calc.html', function (err, data) {
        if (err)
        {
            console.log("error ", err);
            return response.end('<h1>Error!</h1>');
        }
        return response.end(data);
    });
}


const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server Runnig at port: ", port);
});



