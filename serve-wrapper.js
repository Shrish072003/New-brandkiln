
const serve = require('serve');
console.log('Serve module:', serve);  // Check if serve is correctly loaded
serve('build', { port: 3000 });