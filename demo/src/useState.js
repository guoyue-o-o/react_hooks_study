import React, {useState} from 'react'
const AddCount = () => {
  const [ count, setCount ] = useState(0)
  const addcount = () => {
    let newCount = count
    setCount(newCount+=1)
  } 
  return (
    <>
      <p>{count}</p>
      <button onClick={addcount}>count++</button>
    </>
  )
}
export default AddCount; 
