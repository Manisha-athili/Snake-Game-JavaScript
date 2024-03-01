
import { onSnake, expandSnake } from "./snake.js";

import { randomGridPosition } from "./grid.js";

let food = getRandamFoodPositions();
export let score = 0;
let scoreElement = document.getElementById("score");

let expansionRate = 4; // Declare expansionRate outside the if-else blocks



export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        // document.score.innerHTML = expandSnake(expansionRate);
        scoreElement.classList.add("score");
        score += 1;                             // Increase the score by 1 when the snake eats the food
        scoreElement.innerHTML = `Your Score : ${score}` ;             // Update the score element on the page
    
        food = getRandamFoodPositions();
    }
}
export function draw(board) {
    // snakeBody.forEach(segment => {  no need 
        const foodElement = document.createElement("div")
        
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart= food.x;
        foodElement.classList.add("food");
        board.appendChild(foodElement);
    // })
}

function getRandamFoodPositions() { // this function helps food to add to the SnakeBody
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();        
    }
    return newFoodPosition;
}



