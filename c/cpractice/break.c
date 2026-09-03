#include<stdio.h>
int main()
{
    int n;
    do
    {
        printf("please enter the number");
        scanf("%d",&n);
        printf("%d",n);

        if (n % 2 !=0)
        {
            break;
        }
        
    } while (1);
    printf("thank you");
    
    return 0;
}