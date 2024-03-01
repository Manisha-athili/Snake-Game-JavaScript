
import{ update as updateSnake , draw as drawSnake, snakeSpeed, getSnakeHead} from "./snake.js"
import { update as updatefood, draw as drawfood, score } from "./food.js";
import { outSideGrid } from "./grid.js";
import { snakeIntersection } from "./snake.js";




let lastrenderTime = 0;
const board = document.getElementById('board');
let gameOver = false;
let isPaused = false; 


function main(currentTime){

    if(gameOver){
    //    return alert('GAME OVER');
   
    if(confirm("GamrOver, Press OK to restart")){ //  clicks on ture
        window.location="/";
        
    }
    return
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime-lastrenderTime)/1000;

    // console.log*currentTime;
    if(secondsSinceLastRender < 1/snakeSpeed) return;
        // console.log("Render");

        lastrenderTime = currentTime

        if (!isPaused) { // Check if the game is not paused
            update();
            draw();
        }

        // update();
        // draw();
    }

    window.requestAnimationFrame(main);

    function update(){
        updateSnake();
        updatefood();
        CheckDeath();
    }
    function draw(){
        board.innerHTML="";
        drawSnake(board);
        drawfood(board);
    }
    function CheckDeath(){
        gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
    }


    // Function to toggle the pause state
    function togglePause() {
         isPaused = !isPaused;
    }

// Add event listener to the game board to toggle pause when clicked
        board.addEventListener('click', togglePause);


    

