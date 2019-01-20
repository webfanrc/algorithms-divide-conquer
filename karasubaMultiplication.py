#!/usr/bin/python
# -*- coding: UTF-8 -*-

# alfa = 5678
# beta = 1234

alfa = 3141592653589793238462643383279502884197169399375105820974944592
beta = 2718281828459045235360287471352662497757247093699959574966967627

def divide(x, y):

    # TypeError: object of type 'bool' has no len()
    # if len(str(x)) < 2 or len(str(y) < 2):
    #     return x * y

    if int(x) < 10 or int(x) < 10:

        # 字符串无法做乘法
        return int(x) * int(y)

    xLength = int(len(str(x)) / 2)
    yLength = int(len(str(y)) / 2)

    a = str(x)[0:xLength]
    b = str(x)[xLength:]
    c = str(y)[0:yLength]
    d = str(y)[yLength:]

    # print xLength, yLength
    # print a, b, c, d
    # return false

    return merge(a, b, c, d)


def merge(a, b, c, d):
    n = len(str(a)) + len(str(b))

    return 10 ** n * divide(a, c) + 10 ** (n/2) * (divide(a, d) + divide(b, c)) + divide(b, d)


print divide(alfa, beta)
