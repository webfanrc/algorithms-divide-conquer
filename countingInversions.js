let array = [1, 3, 5, 2, 4, 6];

function divide(A) {
    if (A.length == 1) {
        return 0
    } else {
        let length = parseInt(A.length / 2);
        let X = divide(A.slice(0, length));
        let Y = divide(A.slice(length));
        let Z = conquer(A);

        // combine
        return X + Y + Z;
    }
}

// *
function conquer(C) {

    let inversionNum = 0;

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

                // *
                inversionNum += A.slice(i).length;

                j++
            }
        }

        return results
    }

    divide(C)

    return inversionNum
}

console.log(divide(array))