#include <stdio.h>

int main()
{
    int num[5];
    int sum = 0;
    int multiply = 1;
    printf("please enter any five number : ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d",&num[i]);
    }
    printf("orignal number in array");
    
    for (int h = 0; h < 5; h++)
    {

        printf(" %d ", num[h]);
    }
    for(int j=0;j<5;j++)
    {
        sum += num[j];
        multiply *= num[j];   
    }
     printf("\nsum of elements in array: %d ",sum);
    printf("\nmultiply of elements in array: %d ",multiply);

    return 0;
}