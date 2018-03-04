var express = require('express')  // require express
var app = express()  // create a request handler function
var server = require('http').createServer(app)  // use our app to create a server
var path = require('path')

// include the static client-side files (.html, .css, .js) from the root path 
app.use(express.static(path.join(__dirname, 'assets')))

// on a GET request to default page, serve up our index.html....
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, '../A03PiveralBrooks/assets', 'index.html'))
})

// Listen for an app request on port 8081
server.listen(8081, function () {
 console.log('listening on http://127.0.0.1:8081/')
})

