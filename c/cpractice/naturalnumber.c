#include<stdio.h>
int main()
{
    int n;
    int sum=0;
    printf("enter number");
    scanf("%d",&n);
    for(int i=1;i<=n;i++)
    {
       
       sum += i;
       
    }
    printf("sum is %d\n",sum);
    for(int k=n;k>=1;k--)
    {
        printf("%d\n",k);
    }
    return 0;
}