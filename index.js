const http = require('http');
const port = 3069

const app = http.createServer((req,res) =>
{
    res.write("<h1>Hello World</h1>")
    res.write("<h1>Hello World</h1>")
    res.end()
})

app.listen(port)