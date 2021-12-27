const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component');

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator);
    plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};