const os =require('node:os');
const { uptime } = require('node:process');
console.log('Informacion del Sistema Operativo');
console.log('---------------------------------');
console.log('Sistema Operativo: ', os.platform());
console.log('Version del SO: ', os.release());
console.log('Arquitectura del SO: ', os.arch());
console.log('CPUS', os.cpus());//<-Oportunidad de escalar procesos en NodeJs
console.log('Memoria libre: ', os.freemem()/1024/1024);
console.log('Memoria total: ', os.totalmem()/1024/1024);
console.log('Uptime', uptime()/60/60);