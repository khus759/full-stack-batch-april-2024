#include<stdio.h>
int main()
{
    int age=0;
    printf("please enter your age");
    scanf("%d",age);

    if(age<18)
{
    printf("you are aldult or ");
    printf("you can vote");
}
 else if(age>18)
 {
    printf("you are teenager or ");
    printf("cant,t vote");
 }
 else
 {
    printf("this is invalid number");
 }
    return 0;
}