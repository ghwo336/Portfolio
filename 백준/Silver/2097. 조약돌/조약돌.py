n=int(input())
fiv=int(n**0.5)
fiv2=-1
if n%fiv!=0:
    fiv2=n//fiv+1
else:
    fiv2=n//fiv
print(max(2*fiv+2*fiv2-4,4))
