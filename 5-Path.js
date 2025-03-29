const path =require ('node:path');
console.log(path.sep);// \ on Windows, / on Linux and MacOS
//Unir rutas
const filePath = path.join('/carpeta1','carpeta2','carpeta3','archivo.txt');
console.log(filePath);// /carpeta1/carpeta2/carpeta3/archivo.txt
const base = path.basename(filePath);
console.log(base);// archivo.txt
const filename = path.basename(filePath, '.txt');
console.log(filename);// archivo
const extension= path.extname(filePath);
console.log(extension);// .txt