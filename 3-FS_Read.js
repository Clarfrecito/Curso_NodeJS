const fs = require('node:fs')
console.log('Leyendo el primer archivo')
fs.readFile('./Archivo.txt', 'utf-8', (err, text) => { // Callback
  if (err) {
    console.error('Error reading Archivo.txt:', err)
    return
  }
  console.log(text)
})
console.log('Haciendo cosas mientras se lee el archivo')
console.log('Leyendo el segundo archivo')
fs.readFile('./Archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error reading Archivo2.txt:', err)
    return
  }
  console.log(text)
})
