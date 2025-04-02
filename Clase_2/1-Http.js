const http = require('node:http')
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200// OK
    res.end('<h1>Bienvenido a mi pagina de Inicio</h1>')
  } else if (req.url === '/BocaJuniors') {
    fs.readFile('Boca.png', (err, data) => {
      if (err) {
        console.error('Error reading file:', err) // Imprime el error en la consola
        res.statusCode = 500 // Internal Server Error
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        console.log('File read successfully') // Confirma que el archivo fue leído
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200// OK
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404// Not Found
    res.end('<h1>404 Not Found</h1>')
  }
}
const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
  console.log(`Server is running on http://localhost:${desiredPort}`)
  console.log('Press Ctrl+C to stop the server')
})
