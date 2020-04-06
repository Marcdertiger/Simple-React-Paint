import { List } from "@material-ui/core"

var range = -1

export const FillRecur = (x: number, y: number, list: any, color: string, targetColor: string)=>{
  
    // receives arr[i][j]
    // items are : {color: string}
 
    //check validity of coordinates
    if(x > list.length - 1 || y > list.length -1 || x === range || y === range){
        return
    }    

    //check if item does not exist or if it's color is already changed/matched
    if( list[x][y] === range || list[x][y].color === color ){
       return
   }

   //check if the item's color matches the color of the item selected for fill
   if( list[x][y].color !== targetColor){
       return
   }

   //edit the list
   list[x][y].color = color

   //search the matrix (list) in all direction
   FillRecur(x + 1, y, list, color, targetColor) //down
   FillRecur(x - 1, y, list, color, targetColor) //up
   FillRecur(x, y + 1, list, color, targetColor) //left
   FillRecur(x, y - 1, list, color, targetColor) //right

   return list
}

export const FillAlgo= (x: number, y: number, list: any, color: string, targetColor: string)=>{
    
    FillRecur(x, y, list, color, targetColor)
    return list
}
