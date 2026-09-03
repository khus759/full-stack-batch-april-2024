#include<stdio.h>
int main()
{
    int num[10];
    printf("please enter the number: ");
    for(int i=1;i<10;i++)
    {
        scanf("%d",&num[i]);
            

    }
    printf("*************\n");
    for(int k=1;k<10;k++)
    {
      printf("user enter number: %d\n",num[k]);
    }
    
    

}