import NumberCell from "./NumberCell"
import SumCell from "./SumCell"
import { generateNumbers } from "./generate"

const Board = ({numbersList, rowSumsList, columnSumsList}) =>{


  return <div className="board">
      {numbersList.slice(0,3).map((number, index) => <NumberCell className="number-cell" key={String(index)} number = {number.number}/>)}
      <SumCell number = {rowSumsList[0]}/>
      {numbersList.slice(3,6).map((number, index) => <NumberCell className="number-cell" key={String(index)} number = {number.number}/>)}
      <SumCell number = {rowSumsList[1]}/>
      {numbersList.slice(6,9).map((number, index) => <NumberCell className="number-cell" key={String(index)} number = {number.number}/>)}
      <SumCell number = {rowSumsList[2]}/>
      {columnSumsList.map((number, index) => <SumCell key = {index} number = {number}/>)}

      {/* <SumCell/> */}
  </div>
}

export default Board