#include<stdio.h>
int main()
{
    int num,c,s=0,r;
    printf("please enter the number: ");
    scanf("%d",&num);
    c=num;
    while(num>0)
    {
        r=num%10;                                                       
        s=r+(s*10);
        num=num/10;
    }
    if(c==s)
    {
        printf("this is palindrome number");
    }
    else
    {
        printf("this number is not palindrome number");
    }

    return 0;
}