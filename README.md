# JExtensions

JavaScript [prototypes](https://www.w3schools.com/js/js_object_prototypes.asp) that I created for my personal projects. Please help by adding more prototypes to this repository. Thank you!

### Basic usage

The following code demonstrates basic usage of JExtensions.

```js

function TestJExtensions()
{
    var number = 2;
    // Check if a number is an even number. 
    var isEven = number.isEven();
    // Check if a number is an odd number. 
    var isOdd = number.isOdd();

    var text = "Hello World";
    // Determinates if the string is a number
    var isNumeric = text.isNumeric();
    // Hash a string.
    var hash = text.toHash();
    // Reverse the string.
    var reverseText = text.reverse();
    // Determine if the string is a valid date.
    var isAValidDate = text.isDate();
    // Determine if the string is a valid email.
    var isAnEmail = text.isAnEmail();
}
```
