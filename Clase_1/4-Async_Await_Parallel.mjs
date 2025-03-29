// const {promisify} = require('util');
// const readFilePromise=promisify(fs.readFile);
/* fs.readFile('./Archivo.txt','utf-8')
 .then((text) => {
 console.log(text);
 }) */
import { readFile } from 'node:fs/promises'
Promise.all([
  readFile('./Archivo.txt', 'utf-8'),
  readFile('./Archivo2.txt', 'utf-8')
]).then((text, text2) => {
  console.log(text)
  console.log(text2)
})
