//^^^^^^^^^^^^^^^^^^^^^^^Task 04^^^^^^^^^AAAAAAAAAAAAAAAAAAAAA

/*Exploring Objects with for...in Loop

Objective: Practice working with objects in TypeScript and iterating over their properties using - a for...in loop.

Instructions:

1. Create a simple object with three items:

o Define an object called myObject with three properties: item1, item2, and item3, = each with corresponding string values.

2. Use a for...in loop to get properties' names and values from the object:

o Iterate through the properties of myObject using a for...in loop.

o Inside the loop, print each property's name and its corresponding value to the

console.*/

let myObject:any = {

    item1: "Frock",
    
    item2: "Abaya",
    
    item3: "Hijabs"
    
    }
    console.log ("Providing property name and correspondind values\n")
    for(let x in myObject){
    
    console.log ("The name of property is :" ,x);
    console.log("The corresponding value of the property is :" ,myObject[x])
    
    };