#include <stdio.h>
int main()
{
    int num[5];
     int j=0;
     int k=4;
    //printf("Please enter Any Number ");
   

    while (j<5)
    {
        scanf("%d",&num[j]);
        j++;
    }
    printf("**********\n");

    while(k>=0)
    {
        printf("%d\n",num[k]);
        k--;
    }

    return 0;
}
