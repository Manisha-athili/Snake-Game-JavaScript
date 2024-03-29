export const snakeSpeed = 4;
let newSegments =0;

import { getinputdirection } from "./input.js";

// snake lenth is here
const snakeBody =[{x:10, y:11}]


// this update function will help the snakebody to movein x direction;
export function update() {

    addSegment(); // calling function


    // defining input direction
    const inputDirection = getinputdirection();
    for(let i = snakeBody.length-2; i>=0; i-- ){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}




// this draw function is used to create snake element to show in the page 
export function draw(board) {
    // console.log("draw Snake");
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart= segment.x;
        snakeElement.classList.add("snake");
        board.appendChild(snakeElement);
    })
}

export function expandSnake(amount){
    newSegments += amount;
}



export function onSnake(position , {ignoreHead=false} = {} ){
        return snakeBody.some((segment , index)=> {
            if(ignoreHead == true && index ===0)return false;
        return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead : true})
}

function equalPositions(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

// if my snake is eating food it should incres the size

function addSegment(){
    for(let i=0 ; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }

    newSegments = 0;
}