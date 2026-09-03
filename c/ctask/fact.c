#include <stdio.h>
int main()
{
    int num[5];

    printf("please enter the number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    printf("total number of array is:");

    for (int k = 0; k < 5; k++)
    {
        if (num[k] % 2 != 0)
        {
            printf("odd number is %d\n", num[k]);
        }
    }

    return 0;
}