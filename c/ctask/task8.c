#include<stdio.h>
int main()
{
    int num;
    int fact=1;
    int i=1;
    printf("please enter any number");
    scanf("%d",&num);
    while (i<=num)
    {
        fact=fact*i;
        i++;

    }
    printf("%d",fact);
    return 0;
}