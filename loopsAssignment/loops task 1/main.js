//............ Loops Assignments ...........
//           Task No 1 :
//1. Creating a Lesson Plan (Using for loop)
//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate 5 whether each lesson is running this year.
//Steps to Follow:
//51. Create a blank array: Start by setting up an empty array named myWork that will hold objects.
//32. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration: o Create an object representing a lesson.
//o Each lesson should have a name property, which is a string like "Lesson 1", B "Lesson 2", etc.
//o Each lesson should also have a status property, which alternates between true 5 and false. This means "Lesson 1" will have status: true, "Lesson 2" will have 5 status: false, and so on. 
//3. Add the lesson to the array: Push each lesson object into the myWork array.
//3 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
//9 Hints:
//• Use a ternary operator to set the status property based on whether the lesson number is I odd or even.
//• The modulo operator % can help determine if a number is even or odd.*/
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 0 ? false : true
    };
    myWork.push(lesson);
}
;
console.log(myWork);
