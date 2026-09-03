#include<stdio.h>
int main()
{
int sum=0;
int i;

for(int i=1; i<=50; i++)
{
printf("%d ",i);
sum += i;
}
printf("\nsum of 1 to 50: %d",sum);

return 0;
}