import NumberCell from "./NumberCell"
import SumCell from "./SumCell"

const Board = ({numbersList}) =>{
  return <div className="board">
      {numbersList.map((number, index) => <NumberCell className="number-cell" key={String(index)} number = {number.number}/>)}
      {/* <SumCell/> */}
  </div>
}

export default Board