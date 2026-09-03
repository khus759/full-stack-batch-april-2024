#include<stdio.h>
int main()
{
    int arrayfirst[5];
    int arraysecond[5];
    int arrayf=0;

    printf("please enter the number:  ");
    
    for(int i=0;i<5;i++)
    {
        scanf("%d",&arrayfirst[i]);
    }
    printf("\n\nThe elements in firstarray are: ");
    for(int j=0;j<5;j++)
    {
        printf("%d,",arrayfirst[j]);
    }
    for(int k=0;k<5;k++)
    {
        arraysecond[arrayf]=arrayfirst[k];
        arrayf++;

    }
    printf("\nThe elements in secondarray are: ");
    for(int i=0;i<arrayf;i++)
    {
     printf("%d,",arraysecond[i]);

    }


    return 0;
}