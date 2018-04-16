# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(N):
    binary = bin(N)[2:]
    maxgap = 0
    count = 0
    for i in binary:
        if i == '0':
            count += 1
        else:
            if count > maxgap:
                maxgap = count
            count = 0

    return maxgap


tests = [1041, 6, 2000]
for i in tests:
    print(solution(i))
