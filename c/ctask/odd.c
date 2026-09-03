#include <stdio.h>
int main()
{
    int num[5];
    int oddnum[5];
    int oddn = 0;
    printf("please enter the number: ");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    for (int k = 0; k < 5; k++)
    {
        if (num[k] % 2 != 0)
        {
            oddnum[oddn] = num[k];
            oddn++;
        }
    }
    printf("\noriginal number in array are: ");
    for (int j = 0; j < 5; j++)
    {
        printf("%d ", num[j]);
    }
    printf("\nodd number is:");
    for (int h = 0; h <oddn; h++)
    {
        printf("%d", oddnum[h]);
    }
    

    return 0;
}