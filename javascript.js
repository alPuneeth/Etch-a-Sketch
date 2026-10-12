// DOM references
const grid = document.querySelector(".grid")
const promptButton = document.querySelector(".prompt-button")



// Event handler functions
function handleSquareHover(event) {
    const sq = event.target
    let color1, color2, color3
    let hoverCountNum = Number(sq.dataset.hoverCount)

    if (sq.classList.contains("single-square")) {
        if (hoverCountNum === 10) {
            sq.style.backgroundColor = `rgb(0, 0, 0)`
            return
        }

        hoverCountNum += 1
        sq.dataset.hoverCount = hoverCountNum

        const remBrightness = (100 - (hoverCountNum * 10))/100
        color1 = 252 * remBrightness 
        color2 = 237 * remBrightness 
        color3 = 30 * remBrightness   

        sq.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    }
}


function handleResizeClick() {
    let size = (prompt("Enter a size between 1 and 100 : "))

    if (size === null) return

    size = Number(size)

    if ((!Number.isInteger(size)) || (size <= 0) || (size > 100)) {
        alert("Enter a whole number between 1 and 100.")
        return
    }

    createGrid(size)
}


// Grid creation
/**
    Clears the existing grid and creates a new grid
    with the specified number of rows and columns.

    @param {number} size - Number of rows and columns in the grid.
 */
function createGrid(size) {

    grid.innerHTML = ""   // remove all existing squares before creating new Grid
    const squareSize = 640 / size
    const totalSquares = size * size

    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement("div")
        div.dataset.hoverCount = "0"
        div.classList.add("single-square")

        div.style.width = `${squareSize}px`
        div.style.height = `${squareSize}px`
        grid.appendChild(div)
    }
}


// Event listener registration
grid.addEventListener("mouseover", handleSquareHover)

promptButton.addEventListener("click", handleResizeClick)


// Initial Grid
createGrid(16)













