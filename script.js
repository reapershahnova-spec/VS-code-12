// 1. Creating an object to store Tinu's information (key & value pairs)
var person = {
    name: "Tinu",
    age: 14,
    grade: "9th"
};

// Printing object values using keys
document.write("<strong>Person Information:</strong><br/>");
document.write("Name: " + person.name + "<br/>");
document.write("Age: " + person.age + "<br/>");
document.write("Grade: " + person.grade + "<br/><br/>");

// 2. Creating an array for favourite colors
var colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Printing entire array
document.write("<strong>List of Favourite Colours:</strong><br/>");
document.write(colors + "<br/><br/>");

// Printing values of array by index number
document.write("First color (index 0): " + colors[0] + "<br/>");
document.write("Third color (index 2): " + colors[2] + "<br/><br/>");

// 3. Performing Array Methods
document.write("Joined with separator: " + colors.join(" - ") + "<br/>");

var removedColor = colors.pop(); // removes the last element
document.write("Removed color (pop): " + removedColor + "<br/>");
document.write("Array after pop: " + colors + "<br/><br/>");

// Using map method to double numbers (practiced in class)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
document.write("The doubled array is: " + doubled + "<br/><br/>");

// 4. Function using the Arguments object to find total sum
function findSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var total = findSum(10, 20, 30);
document.getElementById("demo").innerHTML = "Total calculated using Arguments object: " + total;