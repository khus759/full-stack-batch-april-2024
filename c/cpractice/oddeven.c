#include<stdio.h>
int main()
{
    int num;
    printf("please enter any number: ");
    scanf("%d",&num);
    if (num %2 == 0)
    {
        printf("this is even number %d",num);
    }
    else
    {
        printf("this is odd number %d",num);
    }
    
    return 0;
}