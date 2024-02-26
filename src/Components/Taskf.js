import React, { useCallback, useMemo, useState } from 'react'

const Taskf = () => {
    const [inputList, setInputList] = useState("");
    const [list, setlist] = useState([]);
    const [dataList] = useState();
    const [data, setData] = useState([]);
  
    const itemAdded = useCallback(() => {
      setData([...data, inputList * inputList])
      if (inputList.length > 0) {
        setlist([...list, `${inputList}'s Square = ${inputList * inputList}`])
      }
      setInputList("")
    },[inputList]);
  
    const memory = useMemo(() => {
      return data.reduce((total, val) => {
        return eval(total + val)
      }, [dataList])
    })
  
  return (
    <>
    <div style={{textAlign : "center" , alignItems: "center"}}>
    <h1>Task F</h1>
    <br/>
        <input type="number" placeholder='Enter a Number' name='' id='' value={inputList} onChange={(event) => setInputList(event.target.value)} />
        <br/>
        <button onClick={itemAdded}>Submit</button>
        <h2>Sum of Square : {memory}</h2>
        <ul>
          {list.map((itemValue, index) => {

            return <li key={index} >
              <div>
                <div><i  aria-hidden="true" /> </div> 
                <div>{itemValue}</div>
              </div>
            </li>
          })}
        </ul>
        <div>

        </div>
      </div>
    </>
  )
}


export default Taskf;
