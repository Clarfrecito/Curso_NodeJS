const http = require('node:http')
const desiredPort = process.env.PORT ?? 1234
const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
})
server.listen(desiredPort, () => {
  console.log(`Server is running on http://localhost:${desiredPort}`)
  console.log('Press Ctrl+C to stop the server')
})
