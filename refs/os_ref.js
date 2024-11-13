const os = require('os');

// Näitab platvormi
console.log(os.platform())

// Näitab arhitektuuri
console.log(os.arch())

// Näitab loogilisi protsessoreid
const cpuInfo = os.cpus();
console.log(cpuInfo);

// Näitab vaba operatiivmälu
console.log(os.freemem())

// Näitab operatiivmälu kogumahtu
console.log(os.totalmem())

// Näitab juurkataloogi
console.log(os.homedir())

// Näitab, kui palju aega arvuti töötab (unix-vormingus)
console.log(os.uptime())