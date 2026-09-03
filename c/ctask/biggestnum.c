#include <stdio.h>
int main()
{
    int num[5];
    printf("please enter the number");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    int max = num[0];
    int min = num[0];
    for (int k = 0; k < 5; k++)
    {
        if (num[k] > max)
        {
            max = num[k];
        }
        if (num[k] < min)
        {
            min = num[k];
        }
    }
    printf("\ntotal element in array ");
    for (int j = 0; j < 5; j++)
    {
        printf("%d ", num[j]);
    }
    
    printf("\nthe min number is: %d", min);
    printf("\nthe max number is: %d", max);

    return 0;
}