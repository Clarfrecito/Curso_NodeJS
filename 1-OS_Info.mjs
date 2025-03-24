import { platform, release, arch, cpus, freemem, totalmem } from 'node:os';
import { uptime } from 'node:process';
console.log('Informacion del Sistema Operativo');
console.log('---------------------------------');
console.log('Sistema Operativo: ', platform());
console.log('Version del SO: ', release());
console.log('Arquitectura del SO: ', arch());
console.log('CPUS', cpus());//<-Oportunidad de escalar procesos en NodeJs
console.log('Memoria libre: ', freemem()/1024/1024);
console.log('Memoria total: ', totalmem()/1024/1024);
console.log('Uptime', uptime()/60/60);