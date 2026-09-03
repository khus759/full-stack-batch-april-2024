#include<stdio.h>
int main()
{
    int number=0;
    
    printf("please enter any number");
    scanf("%d",&number);
    printf("%d", number %2==0);
    return 0;
}