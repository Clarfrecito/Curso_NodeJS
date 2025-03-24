const fs =require('node:fs');//Siempre usar el prefijo node: para importar módulos nativos de Node.js
const stats=fs.statSync('./Archivo.txt');
console.log(
    stats.isFile(),//Si es un fichero
    stats.isDirectory(),//Si es un directorio
    stats.isSymbolicLink(),//Si es un enlace simbólico
    stats.size//Tamaño del archivo en bytes
)