let array = [3,8,2,5,1,4,7,6];

function divide(C) {

}



function partition(A, l, r) {
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

    console.log('i', i)

    cache = A[i - 1];
    A[i - 1] = A[l];
    A[l] = cache;

    return A;
}

console.log(partition(array, 0, array.length))