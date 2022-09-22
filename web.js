//khai báo module http  

const http = require('http')


//khai báo server host

const host = 'localhost' //127.0.0.1

//khai báo server port


const port = 6969

//tạo web server

const server = http.createServer((request, respond) => {
    respond.end('Hello everyone. I am learning NodeJs, I will now show you abc. A beautiful village, situation on a DOnt Stop!')
})


//chạy server

server.listen(port, () => {
    console.log('Server is running at http://' + host + ":" + port)
})

