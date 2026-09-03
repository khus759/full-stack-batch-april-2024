#include<stdio.h>
int main()
{
    int num[10];
    
    printf("please enter any number");
    for(int i=0;i<10;i++)
    {
        scanf("%d",&num[i]);
    }
    int min=num[0];
    int max=num[0];
    printf("orignal number ");
    for(int k=0;k<10;k++)
    {
        printf("%d ",num[k]);
        if (num[k]<min)
        {
            min=num[k];
        }
        if(num[k]>max)
        {
            max=num[k];
        }
            
    }
    printf("\nMin number %d",min);
    printf("\nmax number %d",max);
    return 0;
}