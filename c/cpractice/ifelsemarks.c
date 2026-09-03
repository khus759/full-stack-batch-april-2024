#include<stdio.h>
int main()
{
    int marks;
    printf("please enter your marks");
    scanf("%d",&marks);
    if (marks>=0 && marks<=30)
    {
        printf("fail \n");
    }
    else if (marks>30 && marks<=100)
    {
        printf("pass \n");
    }
    else{
        printf("invalid number");
    }
    
    return 0;
}