const graph = require('./graph');

function printArray() {
    console.log(" ");
    let strArray = "";
    for (i = 0; i < graph.plane.length; i++){
        strArray += graph.plane[i] + '\n';
    }
    console.log(strArray);
}

module.exports = {printer: printArray};