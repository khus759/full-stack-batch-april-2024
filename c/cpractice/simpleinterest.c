// calculate simple interest
#include <stdio.h>
int main()
{ // p=principal
    // r=rate,t=time,si=simple interest formula (p*r*t)/100
    float p, r, t;
    p = 152;
    r = 10;
    t = 2;
    float si = (p * r * t) / 100;
    printf("answer is %f",si);

    return 0;
}
