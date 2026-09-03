#include<stdio.h>
int main()
{
    int num;
    int fact=1;
    printf("Please Any number ");
    scanf("%d",&num);
    for(int i=1; i<=num; i++)
    {
        fact=fact*i;
        
    }
    printf("final factorial is : %d",fact);
}  
