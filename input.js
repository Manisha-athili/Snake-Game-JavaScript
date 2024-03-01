
let inputDirection ={x:0, y:0};
let lastInputDirection = {x:0, y:0};

//  these are event listener to controle the game using keyboard keys.

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if(lastInputDirection.y !== 0) break;  // specifing input direction based on old input direction by adding it

            inputDirection={x:0, y: -1}
            break;
        case "ArrowDown":
            if(lastInputDirection.y !== 0) break;

            inputDirection={x:0, y:1}
            break;
        case "ArrowLeft":
            if(lastInputDirection.x !== 0) break;

            inputDirection={x:-1, y:0}
            break;
        case "ArrowRight":
            if(lastInputDirection.x !== 0) break;

            inputDirection={x:1, y:0}
            break;
    
        default:
            break;
    }
});

export function getinputdirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}