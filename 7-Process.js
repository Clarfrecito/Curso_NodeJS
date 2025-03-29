//Argumentos de entrada
console.log(process.argv);
//Controlar eventos del proceso
process.on('exit', (code) => {
    //Limpiar recursos
});
console.log(process.cwd());//Directorio de trabajo
//Controlar proceso y su salida
console.log(process.env.PEPITO);//Variables de entorno
process.exit(0);//0: Salida correcta, 1: Error