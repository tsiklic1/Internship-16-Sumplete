import NumberCell from "./NumberCell"
import SumCell from "./SumCell"
import { useState } from "react"
import { grid } from "../utils/generate"

const Board = ({numbersList, rowSumsList, columnSumsList}) =>{
  const [board, setBoard] = useState(grid)

  console.log(board)
  return <div className="board">
      {grid.map((gridItem) => gridItem.classList === "number" ?
       <NumberCell className="number-cell" key={gridItem.id} gridItemId = {gridItem.id} number = {gridItem.content} setBoard = {setBoard}/>
      : <SumCell className="sum-cell" key={gridItem.id} number = {gridItem.content}/>
      )}


  </div>
}

export default Board