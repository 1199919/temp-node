const os = require('os');

// check userInfo

const user = os.userInfo();
console.log(user);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);