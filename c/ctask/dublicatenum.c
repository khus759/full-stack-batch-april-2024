#include<stdio.h>

int main()
{
    int num[10];
     printf("please enter the number: ");
    
    for(int i=0;i<10;i++)
    {
        scanf("%d",&num[i]);
    }
        for(int k=0;k<10;k++)

        {
            for(int p=k+1;p<10;p++)
            {
                if(num[k]==num[p])
                {
                    
                    printf("dublicate number is  %d\n ",num[k]);
                    for(int k=p;k<10 -1;k++)
                    {
                        num[k]=num [k+1];
                    }
                }
                
            }
        }
        
    return 0;
}