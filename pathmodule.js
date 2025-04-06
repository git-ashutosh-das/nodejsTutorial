//import path from 'path'; // used in es6 modules 
const path = require('path'); // used in common js modules
console.log(path.basename('/users/admin/pathmodule.js'));

console.log(path.basename(__filename));
