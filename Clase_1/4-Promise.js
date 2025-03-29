// const {promisify} = require('util');
// const readFilePromise=promisify(fs.readFile);
/* fs.readFile('./Archivo.txt','utf-8')
 .then((text) => {
 console.log(text);
 }) */
const fs = require('node:fs/promises')
console.log('Leyendo el primer archivo')
fs.readFile('./Archivo.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })
console.log('Esperando mientras se lee el archivo')
console.log('Leyendo el segundo archivo')
fs.readFile('./Archivo2.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })
