#include<stdio.h>
int main()
{
    char day;
    printf("please enter 1-7 days:  ");
    scanf("%s",&day);
    switch (day)
    {
    case 'm':
        printf("monday \n");
        break;
     case 't':
        printf("tuesday \n");
        break;
    case 'w':
        printf("wednesday \n");
        break;
    case 'T':
        printf("thusday \n");
        break;
    case 'f':
        printf("friday \n");
        break;
    case 's':
        printf("saturday \n");
        break;
    case 'S':
        printf("sunday \n");
        break;
    
    default:
    printf("this is incorrect no \n");
        
    }

    return 0;
}