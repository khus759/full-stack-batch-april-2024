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
            for(int i=k+1;i<10;i++)
            {
                if(num[k]==num[i])
                {
                    
                    printf("dublicate number  \n %d ",num[k]);
                    for(int p=k;p<10-1;p++)
                    {
                        num[p]=num [p+1];
                        printf("%d",p);
                    }
                }
                
            }
        }


    return 0;
}