n,m=map(int,input().split())
graph1=[]
graph2=[]
for x in range(n):
    a=list(input())
    graph1.append(a)
k=input()
for x in range(n):
    a=list(input())
    graph2.append(a)
dap=0

for x in range(n):
    for y in range(m):
        if graph2[x][y]==graph1[x][y]:
            dap+=1
print(dap)