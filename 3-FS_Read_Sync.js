const fs=require('node:fs');
console.log('Leyendo el primer archivo');
const text= fs.readFileSync('./Archivo.txt','utf-8');
console.log(text);
console.log('Haciendo cosas mientras se lee el archivo');
console.log('Leyendo el segundo archivo');
const text2= fs.readFileSync('./Archivo2.txt','utf-8');
console.log(text2);