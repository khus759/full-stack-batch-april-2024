#include <stdio.h>
void addition(int num[]);

int main()
{
    int num[5];
    printf("please enter the number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d",&num[i]);
    }
    addition(num);

    return 0;
}
void addition(int num[])
{
    int sum = 0;
    printf("the numbers in array are: ");
    for (int j = 0; j < 5; j++)
    {
        printf(" %d ", num[j]);

        sum += num[j];
    }
    printf(" \nsum of number are %d", sum);
}