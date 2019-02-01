let rs = require("fs");

let data = rs.readFileSync("input_quickSort.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i ++) {
    array[i] = parseInt(array[i])
}

let m = 0;

array = [2, 20, 1, 15, 3, 11, 13, 6, 16, 10, 19, 5, 4, 9, 8, 14, 18, 17, 7, 12];

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

    // let array_cache = A[r-1];
    // A[r-1] = A[l];
    // A[l] = array_cache;
    // let p = A[l];


    // middle of it
    // Identify which of these three elements is the median (i.e., the one whose value is in between the other two)
    // tip: https://www.coursera.org/learn/algorithms-divide-conquer/discussions/weeks/3/threads/3svB7I86Eee8LxLjS85WxA
    // tip: https://www.coursera.org/learn/algorithms-divide-conquer/discussions/weeks/3/threads/fG_c7gxREeiFUgpNZCwT4A
    let p = 0;
    let k = 0;
    if ((r - l) % 2 == 0) {
        k = l + parseInt((r-l)/2);
    } else {
        k = l + parseInt((r-l)/2);
    }

    let new_array = [A[l],A[k],A[r-1]];
    let new_array_sort = [A[l],A[k],A[r-1]].sort();
    let middle_number = new_array_sort[1];

    for (let m = 0; m < new_array.length; m++) {
        if (new_array[m] == middle_number) {
            if (m == 1) {
                // let array_cache = A[parseInt((l+r-1)/2)];
                // A.splice(parseInt((l+r-1)/2),1);
                // A.splice(l,0,array_cache);
                // p = A[l];

                // another way
                let array_cache = A[k];
                A[k] = A[l];
                A[l] = array_cache;
            } else if (m == 2) {
                // last of it
                // let array_cache = A[r-1];
                // A.splice(r-1,1);
                // A.splice(l,0,array_cache);
                // p = A[l];

                // another way:
                let array_cache = A[r-1];
                A[r-1] = A[l];
                A[l] = array_cache;
            }
            p = A[l];
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