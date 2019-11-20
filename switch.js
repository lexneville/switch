let grade = 81; //Switch can be used instead of an if/else comparison

switch(true) {
    case grade >= 90:
        console.log("Your results are amazing"); // Switches contain cases which are compared from top to bottom and if 
        break;                                  // no cases are fulfilled, the default code will run.
    case grade >= 80:
        console.log("Your grade is great");
        break;
    default:
        console.log("Your grade is not good enough")
}


