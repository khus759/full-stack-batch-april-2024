#include<stdio.h>

int Add(int num1, int num2);
int Subtract(int num1, int num2);
int Multiply(int num1, int num2);
int Divide(int num1, int num2);

int main()
{
    int FirstNumber,SecondNumber;
    int Task;
    int result=0;

    printf("Press 1 for Addition\n");
    printf("Press 2 for Subtraction\n");
    printf("Press 3 for Multiply\n");
    printf("Press 4 for Divide\n");

    printf("Please enter the Two Number\n");
    scanf("%d %d",&FirstNumber,&SecondNumber);
    printf("Please enter the  Tasknumber \t");  
    scanf("%d",&Task);
    switch (Task)
    {
    case 1:
        result=Add(FirstNumber,SecondNumber);
        printf("%d",result);
        break;
    case 2:
        result=Subtract(FirstNumber,SecondNumber);
        printf("%d",result);
        break;
    case 3:
        result=Multiply(FirstNumber,SecondNumber);
        printf("%d",result);
        break;
    case 4:
        result=Divide(FirstNumber,SecondNumber);
        printf("%d",result);
        break;
    default:
        printf("This is invalid Number");
        break;
    }
    return 0;
}
int Add(int num1, int num2)
{
    return num1+num2;
}
int Subtract(int num1, int num2)
{
    return num1-num2;
}
int Multiply(int num1, int num2)
{
    return num1*num2;
}
int Divide(int num1, int num2)
{
    return num1/num2;

}


