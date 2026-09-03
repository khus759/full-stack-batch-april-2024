#include<stdio.h>
#include<string.h>

int main()
{
    char name[10];
    char charater;
    int flage=0;

    printf("Please enter Any Name ");
    scanf("%s",&name);

    printf("Please enter Any Charater ");
    scanf(" %c",&charater);

    for(int i=strlen(name);i>1;i--)
    {
        if(name[i]==charater)
        {
            flage=1;
        }
    }
    if(flage==1)
    {
        printf("\n matched");
    }
    else 
    {
        printf("Not matched / Not found");
    }


    return 0;
}