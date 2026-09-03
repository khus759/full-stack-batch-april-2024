Create a Student class with instance variables name, grade, and subjects. Write methods to add a subject and display the student's information.

Define a Rectangle class with instance variables width and height. Add methods to calculate and return the area and perimeter of the rectangle.

Implement a Book class with instance variables title, author, and year_published. Add a method to return a formatted string with the book's details.

Create a Course class with instance variables course_name and credits. Write methods to display the course information and to update the credits.

Design a Circle class with an instance variable for radius. Add methods to calculate the circumference and area of the circle.

Define a Employee class with instance variables name, position, and salary. Add a method to give a raise to the employee by a certain percentage.


Basic Inheritance: Write a Python class Animal with a method speak() that returns a generic message like "Animal sound." Create a subclass Dog that inherits from Animal and overrides the speak() method to return "Woof!"

Constructor Inheritance: Create a base class Person with an __init__ method that initializes name and age. Create a subclass Student that inherits from Person and adds an additional attribute student_id. Demonstrate how to initialize an object of the Student class.

Method Overriding: Define a base class Shape with a method area(). Create two subclasses, Circle and Rectangle, that override the area() method to return the area of the respective shape. Show an example of creating instances of each shape and calling their area() methods.

Multiple Inheritance: Create two base classes A and B, each with a method display(). Create a subclass C that inherits from both A and B and calls the display() method from each base class. Demonstrate the output when calling the display() method on an instance of C.

Inheritance with Method Resolution Order (MRO): Define three classes: X, Y, and Z, where Y and Z both inherit from X, and Z inherits from Y. Implement a method show() in each class. Create an instance of Z and explain the order in which the show() method is resolved and executed.

Super Function: Create a base class Vehicle with a method describe() that prints "This is a vehicle." Create a subclass Car that inherits from Vehicle and overrides describe() to include additional details. Use the super() function to call the describe() method of Vehicle from within Car.

