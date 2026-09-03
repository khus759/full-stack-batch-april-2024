#include<stdio.h>

int main()
{
    int Number[5]={99,15,19,6,36,};
    int temp;

    printf("task_sorting number in ascending order\n");
    for(int i=0;i<5;i++)
    {
      printf("%d",Number[i]);
    }

    for(int i=0;i<5;i++)
    {
      for(int j=i+1;j<5;j++)
      {
        if(Number[i]>Number[j])
        {
          temp=Number[i];
          Number[i]=Number[j];
          Number[j]=temp;

        }
      }
    }
    
printf("\n**********acending order***********\n");
for(int i=0;i<5;i++)
{
  printf("%d \t",Number[i]);
}


  return 0;
}