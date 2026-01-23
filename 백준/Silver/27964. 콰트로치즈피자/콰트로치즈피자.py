n=int(input())
s=set()
li=list(input().split())
for x in li:
    if len(x) >= 6 and x.endswith("Cheese"):
        s.add(x)
if len(s)>=4:
    print('yummy')
else:
    print('sad')
        