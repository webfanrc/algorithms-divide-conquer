let rs = require("fs");

let data = rs.readFileSync("input.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
    array[i] = parseInt(array[i])
}

console.log('input:', array.length)

// *
function main(C) {

    let inversionNum = 0;

    function divide(C) {
        if (C.length < 2) {
            return C
        }

        let length = parseInt(C.length / 2); // 1.5 => 1

        let left = C.slice(0, length);
        let right = C.slice(length);

        return merge(divide(left), divide(right))
    }


    function merge(A,B) {
        let results = [];

        let i = 0;
        let j = 0;

        for (let k = 0; k < A.length + B.length; k++) {
            if (A[i] < B[j] || B[j] == undefined) {
                results[k] = A[i];
                i++
            }
            else if (B[j] < A[i] || A[i] == undefined) {
                results[k] = B[j];

                inversionNum += A.slice(i).length;

                // this is a boom if the input array is too big
                //
                // if (A.slice(i).length != 0) {
                //     console.log(A.slice(i), B[j])
                // }

                j++
            }
        }

        return results
    }

    divide(C)

    return inversionNum
}

console.log(main(array))