const http = require('http')
const port = 3031

const rotas = {
    '/': 'nada pai kkk',
    '/musicas': 'entrei nas musicas',
    '/artistas': 'entrei em artistas',
    '/algo': 'seila'
}

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`funcionando em http://localhost:${port}`)
})