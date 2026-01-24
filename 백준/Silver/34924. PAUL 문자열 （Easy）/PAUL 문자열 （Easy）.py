n=int(input())
s=input()
P=-1
A=-1
U=-1
L=-1
for x in range(n):
    if s[x]=='P':
        P=x
    if s[x]=='A':
        A=x
    if s[x]=='U':
        U=x
    if s[x]=='L':
        L=x
if P<A<U<L:
    if  (A-P)%2 == 1 and (U-A)%2 == 1 and (L-U)%2==1 and (n-U)%2 ==0 and P%2==0:
        print('YES')
    else:
        print('NO')
else:
    print('NO')