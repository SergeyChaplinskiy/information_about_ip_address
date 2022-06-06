
const os = require('os');
const infoIp = require('./getIp');

const networkInterfaces = os.networkInterfaces();

const op = infoIp(networkInterfaces);
console.log(op);
