s={0}
n=int(input())
dp=[0]
for x in range(1,n+1):
    if dp[-1]-x<0 or dp[-1]-x in s:
        s.add(dp[-1]+x)
        dp.append(dp[-1]+x)
        
    else:
        s.add(dp[-1]-x)
        dp.append(dp[-1]-x)
        
print(dp[-1])