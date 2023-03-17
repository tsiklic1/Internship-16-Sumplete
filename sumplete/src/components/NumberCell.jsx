const NumberCell = ({number}) => {
  const handleClick = ()=>{
    console.log("clicked", number)
  }

  return <div className="cell number" onClick = {()=> {handleClick()}}>
    {number}
  </div>
}

export default NumberCell