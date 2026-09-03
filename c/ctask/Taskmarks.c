#include<stdio.h>

int main()
{
    int marks[3];
    int sum=0;
    float average=0;

    printf("Enter phy marks ");
    scanf("%d",&marks[0]);

    printf("Enter chem marks ");
    scanf("%d",&marks[1]);

    printf("Enter math marks ");
    scanf("%d",&marks[2]);

    sum=marks[0]+marks[1]+marks[2];
    average=sum/3;

    printf("average is %f",sum);
    
    return 0;
}
