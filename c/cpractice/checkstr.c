#include <stdio.h>

int main() 
{
    char ch;
    printf("character input ");
    scanf("%c", &ch);

    if (ch >= '0' && ch <= '9') 
    {
        printf("'%c' digit ", ch);
    } else 
    {
        printf("'%c' not digit ", ch);
    }

    return 0;
}