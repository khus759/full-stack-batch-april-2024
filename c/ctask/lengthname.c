#include<stdio.h>

int main()
{
    char name[10];
    int count=0;
    printf("please enter your name: ");
    scanf("%s",&name);
      for(int k=0;name[k]!='\0';k++)
    {
      count++;  
    }
    printf("length is =%d",count);


    return 0;
}