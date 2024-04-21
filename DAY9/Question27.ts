// Alien Color#3:
//Alien Color#3:
let alien_color: string = 'green';

// Version for green alien
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
} else {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}
 alien_color= 'red';

// Version that runs the else block
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting down an alien that is not green.");
}
 alien_color = 'red';

// Version for red alien
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
} else {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}
