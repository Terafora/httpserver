import * as net from 'net';

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const req : string = data.toString();
        const path : string = req.split(' ')[1];
        const res : string = path === '/' ? 'HTTP/1/1 200 OK\r\n\r\n' : 'HTTP/1.1 404 Not Found\r\n\r\n';
        socket.write(res);
        socket.end();
});

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

server.listen(4221, 'localhost', () => {
    console.log('Server is running on port 4221');
});
