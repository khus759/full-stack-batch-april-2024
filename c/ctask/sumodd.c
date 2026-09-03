#include <stdio.h>

int main() 
{

    int number[10];
    int evensum=0, oddsum=0;
    
    printf("task2-sum of even or odd number \n \n");
    printf("Please enter any ten number:\n");

    for(int i=0; i < 10; i++)
    {
       
       scanf("%d",&number[i]);
    }
    for(int i=0; i<10;i++)
    {
            if(number[i] %2 ==0)
     {
        evensum +=number[i];  
    }
    else
    {
        oddsum  +=number[i];
    }
    }
    printf("\n****output*****\n");
    printf("sum of even number: %d\n",evensum);
    printf("sum of odd number: %d\n",oddsum);



    return 0;
}
