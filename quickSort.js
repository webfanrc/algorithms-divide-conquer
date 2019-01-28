let rs = require("fs");

let data = rs.readFileSync("input_quickSort.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
    array[i] = parseInt(array[i])
}

let m = 0;

console.log('input:', array.length)

function divide(A, p, r) {
    if (p < r) { // 如果这里加等号，会导致最后加了个undefined
        let q = conquer(A, p, r);
        divide(A, p, q);
        divide(A, q+1, r);
    }
}

// Partition subroutine
function conquer(A, l, r) {
    // choose a pivot element

    // first
    // let p = A[l];

    // last
    // let p = A[r-1];

    // median of three pivot
    let first = A[l];
    let middle = A[(r - 1 + l)/2];
    let last = A[r-1];
    let p = getMiddle(first, middle, last);

    let i = l + 1;

    // used for swap element
    let cache = 0;

    // partitioning subroutine
    for (let j = l + 1; j < r; j++) {
        if(A[j] < p) {
            cache = A[i];
            A[i] = A[j];
            A[j] = cache;

            i++;
        }
    }

    cache = A[i - 1];
    A[i - 1] = A[l];
    A[l] = cache;

    array = A;

    //console.log(A, i-1);

    m = m + (r - l - 1);

    return i-1;
}

function getMiddle(a,b,c) {
    let array = [a,b,c];
    array = array.sort();
    return array[1]
}

divide(array, 0, array.length);

// for(let i = 0; i < array.length; i++) {
//     if (array[i] !== i + 1) {
//         console.log('123123')
//     }
// }

console.log(m);