n=int(input())
if n>=1000000:
    print(n*2//10,n*8//10)
elif n>=500000:
    print(n*15//100,n*85//100)
elif n>=100000:
    print(n*1//10,n*9//10)
else:
    print(n*5//100,n*95//100)
