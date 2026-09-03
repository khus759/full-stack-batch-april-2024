#include<stdio.h>
int main()
{
    int num[2];
    printf("please enter five number");
    for(int i=0;i<2;i++)
    {
        scanf("%d",&num[i]);
    }
    for(int k=0;k<2;k++)
    {
        
        for(int n=k+1;n<2;n++)
        {
            printf(" k is %d n is %d\n",num[k],num[n]);
        }
    }
      

    return 0;
}