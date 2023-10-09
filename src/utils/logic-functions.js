import {
    deepCloneArray,
    findValuePosition,
    getValueAtCoordinate,
    allOnesInLastIndex
} from "./helper-functions";

// generates a new maze
export function generateMaze(rows, columns) {
    const maze = [];
    const doubledRows = 2 * rows - 1;
    const doubledColumns = 2 * columns - 1;

    // Initialize the maze with walls (represented as 1s)
    for (let i = 0; i < doubledRows; i++) {
        const row = [];
        for (let j = 0; j < doubledColumns; j++) {
            row.push(1);
        }
        maze.push(row);
    }

    // Create a starting point (top-left corner) and set it as a passage (0)
    const startRow = 0;
    const startCol = 0;
    maze[startRow][startCol] = 0;

    // Randomized maze generation
    const directions = [
        [-2, 0], // Up
        [2, 0], // Down
        [0, -2], // Left
        [0, 2] // Right
    ];

    function isInside(row, col) {
        return row >= 0 && row < doubledRows && col >= 0 && col < doubledColumns;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createPath(row, col) {
        shuffle(directions);

        for (let direction of directions) {
            const newRow = row + direction[0];
            const newCol = col + direction[1];

            if (isInside(newRow, newCol) && maze[newRow][newCol] === 1) {
                maze[newRow][newCol] = 0;
                maze[row + direction[0] / 2][col + direction[1] / 2] = 0;
                createPath(newRow, newCol);
            }
        }
    }

    createPath(startRow, startCol);

    maze[startRow][startCol] = "a"; // before returning the maze, we need to make the starting point (top-left corner) our "a" value

    // if the entire right side of the maze is black, the maze cannot be completed, so recursively call the function until a winnable maze is generated
    if (allOnesInLastIndex(maze)) {
        return generateMaze(5, 5);
    } else {
        return maze;
    }
}

// determines when a move is valid (ie. orthogonal to an empty spot on the maze) or invalid (ie. hitting a wall or trying to go out of bounds) -- returns an object containing the 2 dimensional array for maze state updating function in <App /> component, as well as a message outlining if the move was valid or not.
export function updateMaze(inputArray, targetString, direction) {
    // Create a deep clone of the input array to avoid modifying the original
    const newArray = deepCloneArray(inputArray);

    // Find the coordinates (i, j) of the target string in the 2D array
    let i, j;
    let found = false;
    for (i = 0; i < newArray.length; i++) {
        for (j = 0; j < newArray[i].length; j++) {
            if (newArray[i][j] === targetString) {
                found = true;
                break;
            }
        }
        if (found) break;
    }

    if (found) {
        switch (direction) {
            case "right":
                // Move forward one index in its current array (if not the last index)
                if (j < newArray[i].length - 1) {
                    newArray[i][j] = newArray[i][j + 1];
                    newArray[i][j + 1] = targetString;
                }
                break;
            case "left":
                // Move back one index in its current array (if not the first index)
                if (j > 0) {
                    newArray[i][j] = newArray[i][j - 1];
                    newArray[i][j - 1] = targetString;
                }
                break;
            case "up":
                // Move up to the previous array in the same index (if not already in the first array)
                if (i > 0) {
                    newArray[i][j] = newArray[i - 1][j];
                    newArray[i - 1][j] = targetString;
                }
                break;
            case "down":
                // Move down to the next array in the same index (if not already in the last array)
                if (i < newArray.length - 1) {
                    newArray[i][j] = newArray[i + 1][j];
                    newArray[i + 1][j] = targetString;
                }
                break;
            default:
                // Invalid direction, do nothing
                break;
        }
    }

    // find the position of "a" in the current array in component state
    const findValueOfAInInputArray = findValuePosition(inputArray, "a");

    // obtain the value coordinate [x,y] vector value of "a" in the new array (ie. "a" has already moved positions to this coordinate in the new array).
    const getValueOfFutureCoordinate = getValueAtCoordinate(newArray, findValueOfAInInputArray);

    // now comparing the coordinate of "a" in the inputArray and the newArray, we can see if the move is valid:
    // if the future move of "a" is about to go to an empty spot, we can simply return the newArray as the move is valid:
    if (getValueOfFutureCoordinate === 0) {
        return { maze: newArray, message: "", messageValue: 0 };
    }
    // if we go into a coordinate with value 1, we hit a wall, so we must return the current array in state and send the user a message of an invalid move
    if (getValueOfFutureCoordinate === 1) {
        return { maze: inputArray, message: "You've hit a wall!", messageValue: 1 };
    }
    // if the move is valid AND they are currently at the far-most right column of the maze, they have won!!
    if (getValueOfFutureCoordinate === "a" && findValueOfAInInputArray[1] === 8) {
        return { maze: inputArray, message: "You've won!", messageValue: 2 };
    }
    // this means "a" is on the perimeter and about to go out of bounds -- return current array state and a message to the user that move is invalid
    if (getValueOfFutureCoordinate === "a") {
        return { maze: inputArray, message: "You're trying to go out of bounds!", messageValue: 3 };
    }
}
