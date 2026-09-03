#include<stdio.h>
#include<string.h>

int main()
{
    int table;

    
    printf("enter table of any number ");
    scanf("%d",&table);


    for(int i=1;i<=10;i++)
    {
         

        printf("%d*%d=%d\n",table,i,table*i);
 
    }

    return 0;
}
