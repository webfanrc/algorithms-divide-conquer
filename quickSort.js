let rs = require("fs");

let data = rs.readFileSync("input_quickSort.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
    array[i] = parseInt(array[i])
}

let m = 0;

//array = [5,4,3,2,1];

console.log('input:', array.length)

// TODO: 修正
function quickSort(A, l, r) {
    if (l < r) {
        let middle = partition(A, l, r);

        quickSort(A, l, middle);
        quickSort(A, middle+1, r);
    }
}

function partition(A, l, r) {

    // first of it
    // let p = A[l];

    // last of it
    // let array_cache = A[r-1];
    // A.splice(r-1,1);
    // A.splice(l,0,array_cache);
    // let p = A[l];


    // middle of it
    let p = 0;
    let new_array = [A[l],A[parseInt((l+r-1)/2)],A[r-1]];
    //console.log(new_array);
    let new_array_sort = new_array.sort();
    //console.log(new_array_sort)
    let middleNumber = new_array_sort[1];
    for (let m = 0; m < new_array.length; m++) {
        if (new_array[m] == middleNumber) {
            if (m == 0) {
                p = A[l]
            }
            if (m == 1) {
                let array_cache = A[parseInt((l+r-1)/2)];
                A.splice(parseInt((l+r-1)/2),1);
                A.splice(l,0,array_cache);

                p = A[l];
            }
            if (m == 2) {
                // last of it
                let array_cache = A[r-1];
                A.splice(r-1,1);
                A.splice(l,0,array_cache);

                p = A[l];
            }
        }
    }



    let i = l + 1;

    let cache = 0;
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


    m = m + (r - l - 1);

    return i-1;
}

quickSort(array, 0, array.length);

for(let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
        console.log('the sort has some problems')
    }
}

console.log(m);

// console.log(array);