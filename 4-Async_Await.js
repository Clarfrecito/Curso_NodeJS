// const {promisify} = require('util');
// const readFilePromise=promisify(fs.readFile);
/* fs.readFile('./Archivo.txt','utf-8')
 .then((text) => {
 console.log(text);
 })*/
const { readFile } = require("node:fs/promises");
//IIFE Inmediatly Invoked Function Expression
(async () => {
  console.log("Leyendo el primer archivo");
  const text= await readFile('./Archivo.txt','utf-8')
  console.log(text);
  console.log("Esperando mientras se lee el archivo");
  console.log("Leyendo el segundo archivo");
  const text2= await readFile('./Archivo2.txt','utf-8')
  console.log(text2);
})();
