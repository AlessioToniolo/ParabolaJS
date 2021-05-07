// 10x10
const plane  = [
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
];

function vectorInterpolate(x, y) {
    if (x > 5 ||  y > 5 || x < -5 || y < -5) {
        console.log(new Error("Please enter coordinates lower than 11!"));
    } else {
        // 0 is at index 4
        let out;

        for (z=0; z < 6-y; z++) {
            for (k=0; k < 6+x; k++) {
                out = {
                    x: z,
                    y: k
                };
            }
        }
    return out;
    }
}

function createObstacle(x, y) {
    let index = [];
    for (i=0; i< y; i++) {
        for (l=0; l<x; l++) {
        }
    }
    index.push(i, l);
    plane[index[1]][index[0]] = 1;
}

function createPoint(x, y) {
    let index = [];
    let z = 0;
    for (i=0; i< y; i++) {
        for (let w = 0; w < x; w++) {
            z = w + 1;
        }
    }
    index.push(i, z);
    plane[index[1]][index[0]] = 2;
}

/**
 * @param {*} path 
 * @param {*} path.startX
 * @param {*} path.startY
 * @param {*} path.endX
 * @param {*} path.endY
 * @param {*} path.vertexX
 * @param {*} path.vertexY
 * @param {*} path.a
 * SHOULD BE AN OBJECT LITERAL
 */
function createParabola(path) {
    createVector(path.startX, path.startY);
    createVector(path.endX, path.endY);
    createVector(path.vertexX, path.vertexY);
    const a = path.a;

    for (let i = 0; i < 11; i++) {
        let output = 0;
        output = a * (i-path.vertexX) - path.vertexY;
        if (output > 11) {
            break;
        }
        createVector(i, output);
    }
}

function createVector(x, y) {
    createPoint(vectorInterpolate(x, y).x, vectorInterpolate(x, y).y);
    console.log(vectorInterpolate.x);
}

module.exports = {
    plane: plane,
    createObstacle: createObstacle, 
    createPoint: createPoint,
    createParabola: createParabola,
    vectorInterpolate: vectorInterpolate,
    createVector: createVector
};
