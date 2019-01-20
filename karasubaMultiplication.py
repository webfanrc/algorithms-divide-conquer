#!/usr/bin/python
# -*- coding: UTF-8 -*-

# alpha = 5678
# beta = 1234

alpha = 3141592653589793238462643383279502884197169399375105820974944592
beta = 2718281828459045235360287471352662497757247093699959574966967627


def divide(x, y):

    # TypeError: object of type 'bool' has no len()
    # if len(str(x)) < 2 or len(str(y) < 2):
    #     return x * y

    # in case of 10 * 10 => 1 * 0 (not good)
    if int(x) <= 10 or int(y) <= 10:

        # 字符串无法做乘法
        return int(x) * int(y)

    x_length = int(len(str(x)) / 2)
    y_length = int(len(str(y)) / 2)

    a = str(x)[0:x_length]
    b = str(x)[x_length:]
    c = str(y)[0:y_length]
    d = str(y)[y_length:]

    # print x_length, y_length
    # print a, b, c, d
    # return false

    return merge(a, b, c, d)


def merge(a, b, c, d):
    n = len(str(a)) + len(str(b))

    return 10 ** n * divide(a, c) + 10 ** (n/2) * (divide(a, d) + divide(b, c)) + divide(b, d)


print divide(alpha, beta)
