const http = require('node:http')
const { findAvailablePort } = require('./10-Free_Port.js')
const port = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
})

findAvailablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
    console.log('Press Ctrl+C to stop the server')
  })
}
)
