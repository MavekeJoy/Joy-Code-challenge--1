function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function prompting user for input and calculate the grade
function promptAndCalculateGrade() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    
    // Converting input to a number
    marks = parseFloat(marks);
    
    // Checking if input is a valid number between 0 and 100
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade = calculateGrade(marks);
        alert("The grade for marks " + marks + " is: " + grade);
    } else {
        alert("Invalid input! Please enter a number between 0 and 100.");
    }
}

// Call the function to prompt user for input and calculate the grade
promptAndCalculateGrade();