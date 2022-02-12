const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
//================socket.io requirements==========
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('index.ejs',{});
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});