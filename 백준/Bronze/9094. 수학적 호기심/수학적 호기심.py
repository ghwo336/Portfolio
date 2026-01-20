t=int(input())
for _ in range(t):
    dap=0
    n,m=map(int,input().split())
    for b in range(2,n):
        for a in range(1,b):
            if (a**2+b**2+m)%(a*b)==0:
                dap+=1
    print(dap)
        
        