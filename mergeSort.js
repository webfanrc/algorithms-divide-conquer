let array = [8,2,3,4,5,6,7]; // C is not sorted

// TODO: 重复的情况
function divide(C) {
    if (C.length < 2) {
        return C
    }

    let length = parseInt(C.length / 2);

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
            j++
        }
    }

    return results
}

console.log(divide(array))