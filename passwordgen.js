let gen = require('generate-password');

let passwords = gen.generateMultiple(3, {

length : 10,
uppercase: false,
symbols: true,
strict: true
});

console.log(passwords)