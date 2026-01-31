a=input()
fiv=['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
dap=len(a)
for x in range(len(a)):
    now=a[x]
    for y in range(len(fiv)):
        if now in fiv[y]:
            dap+=(2+y)
            break
print(dap)
