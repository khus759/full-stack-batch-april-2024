#include<stdio.h>
int main()
{
    int num[10];
    
    
    printf("please enter any number: ");
    for(int i=0;i<=10;i++)
    {
        scanf("%d",&num[i]);
    }
    for(int k=0;k<=10;k++)
    {
        if(num[k]<0)
        {
            printf("negative number: %d\n",num[k]);
            
        }
        else
        {
            printf("positive number: %d\n",num[k]);
        }
        
    }
    return 0;
}