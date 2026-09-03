#include <stdio.h>
int main()
{
    int rollno[2];
    char name[2][10];
    char address[2][10];
    
    printf("Enter Student Rollno: ");
    scanf("%d", &rollno[0]);

    printf("Enter Student Name: ");
    scanf("%s", &name[0]);

    printf("Enter Student Address: ");
    scanf("%s", &address[0]);

    printf("Enter Student Rollno: ");
    scanf("%d", &rollno[1]);

    printf("Enter Student Name: ");
    scanf("%s", &name[1]);
    printf("Enter Student Address: ");
    scanf("%s", &address[1]);


    printf("\nStudent Rollno:  %d", rollno[0]);
    printf("\nStudent Name: %s", name[0]);
    printf("\nStudent Address %s", address[0]);

    printf("\n\nStudent Rollno:  %d", rollno[1]);
    printf("\nStudent Name: %s", name[1]);
    printf("\nStudent Address %s", address[1]);

    return 0;
}