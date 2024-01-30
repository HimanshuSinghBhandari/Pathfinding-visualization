let ROWS = 30
let COLS = 70
let LENGTH
let BoardObj
let ai 
const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))
let sel 
let wallAnimation = true
let mazeSel 
let visualising = false
let removingWall = false
let algorithm = localStorage.getItem('algorithum')

let movingEnd=false
let movingStart = false

let startTime = 0;
let endTime = 0;
let timeInterval
let now 
let exploredNumberP
let timeP
let finalPathCountP
let desc3
let heading3

function setup() {
    createCanvas(window.innerWidth * 0.7 , window.innerHeight * 0.9);
    LENGTH = height / ROWS
    COLS = round(width / LENGTH)

    BoardObj = new Board(ROWS , COLS)
    ai = new AI(BoardObj)
    //creating the element 
    let sideDiv = createDiv()
    let phoneDiv = createDiv('It seems you are using a phone , for the best experience , please view this website on a laptop/desktop.')
    let btnContainer = createDiv()
    let wallsContainer = createDiv()
    let removeWallbtn = createButton('Remove walls')
    let infoDiv = createDiv()
    let startBtn = createButton('Visualise')
    let resetBtn = createButton('Reset')
    let wallAnimationbtn = createButton('Toggle wall animation')
    let genMazeBtn = createButton('Generate Random Maze')
    let desc1 = createP('<u>Drag to place walls. </u>')
    let desc2 = createP('To change the locations of the start and end points, simply click on one of them first, then move it to another cell.')
    desc3 = createP("This algorithm explores all nodes at the present depth prior to moving on to the nodes at the next depth level. <br/><br/>Gurantees shortest path.<br/>")
    let metaDiv = createDiv()
    let credits = createP("Source Code: <a href='https://github.com/HimanshuSinghBhandari/Pathfinding-visualization.git' target='_blank'> Himanshu Singh </a>")
    

}
