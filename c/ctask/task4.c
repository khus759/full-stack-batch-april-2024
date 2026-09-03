#include<stdio.h>
int main()
{
    int num[5];
    int g;
    printf("please enter the number: ");
    for(int i=0;i<5;i++)
    {
        scanf("%d",&num[i]);
            

    }
    printf("****output*********\n");
    for(int k=0;k<5;k++)
    {
      g=num[k]*num[k]*num[k];
      printf("%d\n",g);
    }
    
    

}