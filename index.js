const express = require('express')
const app = express();
const http = require('http').Server(app);
const port = 3000;
//Socket
const io = require('socket.io')(http);


//public folder
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

//Serve Index.html
app.get('/', (req, res) => {
    res.sendFile('index.html');
});


io.on('connection', (socket)=> {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    });
});

http.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`);
});