let rs = require("fs");

let data = rs.readFileSync("test.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
  array[i] = array[i].split(' ').map(function(n, index) {
    return parseInt(n)
  })
  array[i] = array[i].slice(1)
}

console.log(array)