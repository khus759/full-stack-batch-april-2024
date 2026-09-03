#include <stdio.h>
int main()
{
    int num[10];
    int arryPostive[10];
    int arryp = 0;
    int arryNegative[10];
    int arryn = 0;
    printf("Please enter Any Number ");
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &num[i]);
    }
    for (int j = 0; j < 10; j++)
    {
        if (num[j] >= 0)
        {
            arryPostive[arryp] = num[j];
            arryp++;
        }
        else
        {
            arryNegative[arryn] = num[j];
            arryn++;
        }
    }
    printf("\n\n Postive Number : ");
    for (int i = 0; i < arryp; i++)
    {
        printf("%d", arryPostive[i]);
    }
    printf("\n\nNegative Number : ");
    for (int j = 0; j < arryn; j++)
    {
        printf("%d", arryNegative[j]);
    }

    return 0;
}