
#include<stdio.h>

int main()

{
    int number;
    printf("please enter number of terms \n");
    scanf("%d",&number);
    int firstvalue=0,secondvalue=1;
    int nextvalue=firstvalue+secondvalue;
    printf("%d \t %d \t",firstvalue,secondvalue);

    for(int i=3;i<=number;i++)
    {
        printf("%d \t",nextvalue);
        firstvalue=secondvalue;
        secondvalue=nextvalue;
        nextvalue=firstvalue+secondvalue;

    }

return 0;
}