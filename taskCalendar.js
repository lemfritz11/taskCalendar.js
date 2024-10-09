let day = prompt("Please enter a day of the week (e.g., 'Monday', 'Tuesday'):");

switch (day) {
    case "Monday":
        console.log("Your task for Monday is: Attend your programming class and start the coding assignment.");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Work on your data structures project and review lecture notes.");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: Join the software engineering group project meeting and discuss tasks.");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Prepare for your algorithms quiz and complete the recommended exercises.");
        break;
    case "Friday":
        console.log("Your task for Friday is: Finish any remaining assignments and relax with a coding challenge or game!");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: Review your notes from the week and experiment with new coding techniques.");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: Plan your study schedule for the upcoming week and take some time to recharge.");
        break;
    default:
        console.log("Oops! That doesn't seem to be a valid day of the week. Please try again.");
}
