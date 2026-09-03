#include<stdio.h>
#include<string.h>
int main()
{
    char name[10];
    int count = 0;
    printf("please enter the name = ");
    scanf("%s",&name);
    for(int k=0;k<strlen(name);k++)
    {
        count++;

    }
     printf("name length is : %d ",count);

    return 0;
}