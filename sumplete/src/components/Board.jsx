import NumberCell from "./NumberCell"
import SumCell from "./SumCell"
import { generateNumbers } from "../utils/generate"
import { useState } from "react"
import { grid } from "../utils/generate"

const Board = ({numbersList, rowSumsList, columnSumsList}) =>{

  return <div className="board">
      {grid.map((gridItem) => gridItem.classList === "number" ? <NumberCell className="number-cell" key={gridItem.id} number = {gridItem.content} />
       : <SumCell className="sum-cell" key={gridItem.id} number = {gridItem.content}/>
      )}


  </div>
}

export default Board