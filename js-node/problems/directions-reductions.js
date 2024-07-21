function dirReduc(arr) {
    const directions = []
    for (let i = 0; i < arr.length; i++) {
        const lastValue = directions.length - 1;
        const directionActual = directions[lastValue];
        const direction = arr[i];
        if (isDirectionForReduction(directionActual, direction)) {
            directions.splice(lastValue, 1);
            continue;
        } 
        directions.push(direction);       
    }
    return directions;
}

function isDirectionForReduction(directionActual, direction) {
    return (directionActual === "NORTH" && direction === "SOUTH") || (directionActual === "SOUTH" && direction === "NORTH") 
    || (directionActual === "WEST" && direction === "EAST") || (directionActual === "EAST" && direction === "WEST");
}

;(() => {
    console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
    console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
    console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
})()