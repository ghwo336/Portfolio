di=dict()
while True:
    try:
        a=list(input().split())
        for x in a:
            for y in x:
                if y not in di:
                    di[y]=1
                else:
                    di[y]+=1
    except:
        dap=[]
        for x in di:
            if di[x]==di[max(di,key=di.get)]:
                dap.append(x)
        dap.sort()
        for x in dap:
            print(x,end='')
        break

        