/*From edabit - very hard
This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, 
you have to calculate the robot's final position.
*/
const calculateFinalPosition = (movements) =>{
    let x = 0; //  x coordinate
    let y = 0;// y coordonate
    let direction = 0;//0 north, 1 east, 2 south, 3 west

    for(let i = 0; i < movements.length; i++) {
        const movement = movements[i];

        switch (direction) {
            case 0://facing north
                y += movement;
                break;
            case 1://facing east
                x += movement;
                break;
            case 2://facing south
                y -= movement;
                break;
            case 3: //facing west
                x -= movement;
                break;

        }
        direction = (direction + 1)% 4; //rotate 90 degrees clockwise
    }
    return [x,y];//return the final coordinates as an array
}

//example
const movements = [20, 30, 10, 40];
const finalPosition = calculateFinalPosition(movements);
console.log(finalPosition);//output [-10, 10]