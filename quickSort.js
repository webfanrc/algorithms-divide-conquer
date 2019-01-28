let array = [3,8,2,5,1,4,7,6];

function divide(A, p, r) {
    if (p < r) {
        let q = conquer(A, p, r)

        divide(A, p, q-1)
        divide(A, q+1, r)
    }
}


function conquer(A, l, r) {
    if (A.length == 1) {
        return A
    }

    // choose a pivot element
    let p = A[l];

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

    return i-1;
}

divide(array, 0, array.length);

console.log(array);