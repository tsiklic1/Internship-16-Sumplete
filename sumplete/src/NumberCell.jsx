const NumberCell = ({number}) => {
  return <div className="cell number" onClick = {()=> {console.log("clicked")}}>
    {number}
  </div>
}

export default NumberCell