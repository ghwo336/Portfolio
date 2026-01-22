n=int(input())
li=[]
for x in range(n):
    a,b=map(int,input().split())
    li.append((a,b))
li.sort()
li.reverse()
dap=0
for x in range(5,n):
    if li[x][0]==li[4][0]:
        dap+=1
print(dap)