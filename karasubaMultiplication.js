// let a = '3141592653589793238462643383279502884197169399375105820974944592';
// let b = '2718281828459045235360287471352662497757247093699959574966967627';

// 数字大的时候不是特别理想，由于JS会自动转换成科学计数法，导致数字缺失

let alfa = '5678';
let beta = '1234';

function divide (x, y) {
    if (x.length < 2 || y.length < 2) {
        return x * y;
    }

    let x_length = parseInt(x.length / 2); // b = 2
    let y_length = parseInt(y.length / 2);

    let a = x.slice(0,x_length);
    let b = x.slice(x_length);

    let c = y.slice(0,y_length);
    let d = y.slice(y_length);

    return merge(a, b, c, d);
}


function merge(a, b, c, d) {
    let n = a.length + b.length;

    // four recursive calls
    // a = 4
    // d = 1 (inner work out side of recursive call)
    return recursion(10, n) * divide(a, c) + recursion(10, n/2) * (divide(a, d) + divide(b, c)) + divide(b, d)

    // TODO: three recursive calls
    // NAME: Gauss's recursive integer multiplication
    // a = 3 (*)
    // let a_c = divide(a, c);
    // let b_d = divide(b, d);
    // let step3 = divide(a + b, c + d)
    // let gauss_trick = step3 - a_c - b_d
    //
    // return recursion(10, n) * b_d + recursion(10, n/2) * gauss_trick + b_d
}

function recursion(basement, integer) {
    if (integer == 1) {
        return basement
    }

    return basement * recursion(basement, integer - 1)
}

console.log(divide(alfa, beta))