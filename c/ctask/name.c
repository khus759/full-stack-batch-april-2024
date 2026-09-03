#include<stdio.h>
#include<string.h>
int main()
{
    int name[20];
    int character;
    int i, found=0;

    printf("please enter your name");
    scanf("%s",&name);

    printf("please enter any charcter");
    scanf("%c",&character);
    
    for(int i=0;name[i]!='\0';i++)
    {
        if(name[i]==character)
        {
            found=1;
            break;

        }

    }

    if(found)
    {
        printf("this is matched.\n");

    }
    else
    {
        printf("this is not matched.\n");
    }

    return 0;
}