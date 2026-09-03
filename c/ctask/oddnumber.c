#include <stdio.h>
void oddnumber();
int main()
{
    int num[5];

    printf("please enter any number");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &num[i]);
    }
    printf("\norignaml number is: ");
    for (int k = 0; k < 5; k++)
    {
        printf("%d ", num[k]);
    }
    oddnumber(num);

    return 0;
}
void oddnumber(int num[5])
{
    int oddnum[5];
    int oddn = 0;
    for (int k = 0; k < 5; k++)
    {
        if (num[k] % 2 != 0)
        {
            oddnum[oddn] = num[k];
            oddn++;
        }
    }
    printf("\noddnumber is: ");
    for (int j = 0; j < oddn; j++)
    {
        printf("%d", oddnum[j]);
    }
}