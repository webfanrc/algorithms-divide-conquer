let rs = require("fs");

let data = rs.readFileSync("test.txt","utf-8");

let array = data.split('\n');

let vertices = [];
let edges = [];


for (let i = 0; i < array.length; i ++) {
  array[i] = array[i].split(' ').map(function(n, index) {
    return parseInt(n)
  })
}

vertices = array.map(function(n) {
  return n[0]
})

array.forEach(function (n) {
  console.log(n)
  n.forEach(function (m, index, array) {
    // 数组是引用类型
    if (index >= 1 && !edges.some(function (arr) {return JSON.stringify(arr) === JSON.stringify([m, array[0]])})) {
      edges.push([array[0], m])
    }
  })
})

console.log(vertices)
console.log(edges)
console.log(array)

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

/*
**** Karger's Min-Cut Algorithm ****

While there are more than 2 vertices:
1. pick a remaining edge (u,v) uniformly at random
2. merge (or "contract") u and v into a single vertex
3. remove self-loops
4. return cut represented by final 2 vertices.
*/

// 图的合并
function contract(vertices, edges) {
  if (vertices.length > 2) {
    let ind = getRandomIntInclusive(0, edges.length-1);

    let pickedEdges = edges[ind];
    edges.splice(ind,1);

    // 合并
    // ？


    contract(vertices, edges)
  } else {
    // 计算
    // ?
  }
}

console.log(contract(vertices, edges))

