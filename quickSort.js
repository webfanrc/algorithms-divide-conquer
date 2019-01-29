let rs = require("fs");

let data = rs.readFileSync("input_quickSort.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
    array[i] = parseInt(array[i])
}

let m = 0;

// array = [3,8,2,5,1,4,7,6];

console.log('input:', array.length)

// TODO: 修正
function sort(A, l, r) {
    if (l < r) {
        let p = choosePivot(A, l, r);
        // console.log(A, l, r, p)


        p = partition(A, l, r, p);

        // sort 1st part
        sort(A, l, p);
        // sort 2nd part
        sort(A, p+1, r);
    }
}


function choosePivot(A, l, r) {
    // choose a pivot element
    // first
    return l;

    // last
    // return r-1;

    // median of three pivot
    // let first = A[l];
    // let middle = A[(r - 1 + l)/2];
    // let last = A[r-1];
    // let p = getMiddle(first, middle, last);
}

function getMiddle(a,b,c) {
    let array = [a,b,c];
    array = array.sort();
    return array[1]
}


function partition(A, l, r, p) {
    let i = l;

    // used for swap element
    let cache = 0;

    // partitioning subroutine
    for (let j = l; j < r; j++) {
        if (j == p) {
            i++;
        }
        if(A[j] < A[p]) {
            // console.log('j:',j);
            // console.log('i:',i);

            cache = A[i];
            A[i] = A[j];
            A[j] = cache;

            i++;

            // console.log('A', A)
        }
    }

    console.log('kkk',i, p)
    cache = A[i - 1];
    A[i - 1] = A[p];
    A[p] = cache;

    array = A;

    //console.log(A, i-1);

    m = m + (r - l - 1);

    return i-1;
}

sort(array, 0, array.length);

// for(let i = 0; i < array.length; i++) {
//     if (array[i] !== i + 1) {
//         console.log('the sort has some problems')
//     }
// }

console.log(m);

console.log(array);