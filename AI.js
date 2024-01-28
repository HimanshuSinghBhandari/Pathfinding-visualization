 const arrContains = (arr , elt) => {
    for(let yes of arr) {
        if(JSON.stringify(yes.i) === JSON.stringify(elt.i) && JSON.stringify(yes.j) === JSON.stringify(elt.j)) {
            return true;
        }
    }
    return false;
 };


 //write a func to compare two arrays
 function compareArrays(arr1 , arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0;i< arr1.length; i++){
        if(JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])){
            return false;
        }
    }
    return true;
 } 

 const arrRemove = (arr , elt) => {
    for(let i=0;i<arr.length; i++){
        if(JSON.stringify(arr[i])=== JSON.stringify(elt)) {
            arr.splice(i , 1);
        }
    }
 };

 const arrAdd = (arr , elt) => {
    for(let i=0;i<arr.length; i++){
        if(JSON.stringify(arr[i].i)=== JSON.stringify(elt.i) && JSON.stringify(arr[i].j)=== JSON.stringify(elt.j)) {
            return;
        }
    }
    arr.unshift(elt);
 };

 const compareGrids = (grid1 , grid2) => {
    return grid1.i === grid2.i && grid1.j === grid2.j
 };

 class AI {
    constructor(board , algorithm){
        this.BoardObj = board
        this.board = this.BoardObj.board
        this.frontier = new QueueFrontier()
        this.seen = []
        this.algorithm = algorithm
    }

    async start(algorithm) {
        now = new Date()
        startTime =0
        this.algorithm = algorithm
        let exploredNum = 0
        finalPathCountP.elt.innerText = 'final path count: 0'
        timeP.elt.innerText = 'Time elapsed: 0s'
        clearInterval(timeInterval)

        timeInterval = setInterval(() => {
            let hi = new Date()
            startTime = hi - now
            if (startTime >= 1000 ){
                timeP.elt.innerText = 'Time elapsed : ' + Math.floor(startTime / 1000) + 's ' + startTime % 1000 + 'ms'
            }
            else {
                timeP.elt.innerText = 'Time elapsed : ' + startTime + 'ms'
            }
        } , 1)
     if(this.algorithm === 'Breadth First Search'){
        this.frontier = new QueueFrontier()
     }
     else if (this.algorithm === 'Depth First Search'){
        this.frontier = new StackFrontier()
     }
     else if (this.algorithm === 'A* Search'){
        this.aStar()
        return 
     }
     else if (this.algorithm === 'Greedy Best First Search') {
        this.greedy()
        return 
     }

     this.seen = []
     this.BoardObj.reset()
     this.frontier.add(this.BoardObj.start)
     let currentGrid;
     while(!this.frontier.isEmpty()){
        if(!visualising) return
        currentGrid = this.frontier.remove()
        if(arrContains(this.seen , currentGrid)){
            continue
        }
        currentGrid.isExplored = true
        exploredNum +=1 
        exploredNumberP.elt.innerText = 'Explored Grids: ' + exploredNum
        arrAdd(this.seen , currentGrid)

        
     }




    }
 }