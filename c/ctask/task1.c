#include<stdio.h>
int main()
{
    
    for(int i=1;i<6;i++)
    {
        printf("%d",i);
        for(int k=1;k<i;k++)
        {
            printf("*",k);
              
        }
        printf("\n");
    }
}