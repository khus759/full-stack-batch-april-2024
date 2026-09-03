#include<stdio.h>
int main()
{
    int table;
    printf("please enter any number");
    scanf("%d",&table);
    for(int k=10;k>=1;k--)
    {
        printf("%d\n",k*table);
    }
    return 0;
}