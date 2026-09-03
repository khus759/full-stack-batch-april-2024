#include<stdio.h>
#include<string.h>
int main()
{
    char name[10];
    int count;
    printf("please enter your name: ");
    scanf("%s",&name);
      for(char k=0;k<=strlen(name);k++)
    {
      count++;  
    }
    printf("length is %d\n",strlen(name));


    return 0;
}