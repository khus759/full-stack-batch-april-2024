import json

# Function to get valid integer input
def get_int_input(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid input. Please enter an integer.")

# Get user details
name = input("Enter your name: ")
student_id = get_int_input("Enter your ID number: ")

# Get the number of subjects
num_subjects = get_int_input("Enter the number of subjects you have: ")

# Initialize a list to store subject marks
marks = []

# Get marks for each subject
for i in range(1, num_subjects + 1):
    mark = get_int_input(f"Enter marks for subject {i}: ")
    marks.append(mark)

# Calculate total and average
total_marks = sum(marks)
average_marks = total_marks / num_subjects

# Create result dictionary
result = {
    "student name": name,
    "student id": student_id,
    "number of subjects": num_subjects,
}

# Add marks to result dictionary
for i, mark in enumerate(marks, start=1):
    result[f"subject {i} marks"] = mark

# Add total and average to result dictionary
result["total marks"] = total_marks
result["average marks"] = average_marks

# Convert result dictionary to JSON
details = json.dumps(result, indent=4)
print(details)
