a=input()
dap=0
fiv=0
for x in range(len(a)):
    if a[x]!='*':
        if x%2==0:
            dap+=int(a[x])
        else:
            dap+=(3*int(a[x]))
    else:
        fiv=x
for x in range(10):
    if fiv%2==0:
        if (dap+x)%10==0:
            print(x)
            break
    else:
        if (dap+3*x)%10==0:
            print(x)
            break 