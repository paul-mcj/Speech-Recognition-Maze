function generateMaze(rows, columns) {
    const maze = [];
    const doubledRows = rows - 1;
    const doubledColumns = columns - 1;

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

    return maze;
}

const maze = generateMaze(10, 10);

// Printing the generated maze
// for (let row of maze) {
//     console.log(row.map((cell) => (cell === 0 ? " " : "#")).join(" "));
// }

const x = [
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0]
];

// console.log(maze);
