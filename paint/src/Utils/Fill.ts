export const FillAlgo = (list: any, selectedItem: any, size: number)=>{
    //Will return an array containg all immediately connected items (same color as selected Item and connected by left/right/top/bottom)
    //Returns no less than 1 item : the selectedItem

    let x = []
    //add selected item to list
    x.push(selectedItem)

    //check up
    let upIndex = Number(selectedItem.index) - size
        if(upIndex >= 0 && selectedItem){
            let up = list[upIndex]
            if(up.color === selectedItem.color){
                x.push(up)
            }
        }

    //check down
    let downIndex = Number(selectedItem.index) + Number(size)
    console.log('check down', downIndex, selectedItem.index, size, Math.pow(size,2))

    if(downIndex < Math.pow(size,2)){
        console.log('check down 22' , downIndex, selectedItem.index, size, Math.pow(size,2))

        let down = list[downIndex]
        if(down && down.color === selectedItem.color){
            x.push(down)
        }
    }

    //check left
    let leftIndex = Number(selectedItem.index) -1
    if(leftIndex >= 0){
        let left = list[leftIndex]
        if(left && left.color === selectedItem.color && left.x !== size){
            x.push(left)
        }
    }

    //check right
    let rightIndex = Number(selectedItem.index) +1
    if(rightIndex >= 0){
        let right = list[rightIndex]
        if(right && right.color === selectedItem.color && right.x !== 1){
            x.push(right)
        }
    }


return x
}

