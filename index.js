const graph = require('./src/graph');
const printer = require('./src/printer');

/*
const path1 = {
    startX: 0,
    startY: 4,
    endX: 2,
    endY: 9,
    vertexX: 8,
    vertexY: 6,
    a: 1
}
*/

//graph.createParabola(path1);
graph.createPoint(graph.vectorInterpolate(0, 0).x, graph.vectorInterpolate(0, 0).y);

printer.printer();
