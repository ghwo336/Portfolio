li=[]
li2=[]
di=dict()
n=int(input())
for x in range(n):
    a=int(input())
    li.append(a)
    li2.append(a)
li2.sort()
li2.reverse()
for x in range(n):
    if li2[x] not in di:
        di[li2[x]]=x+1
for x in li:
    print(di[x])
