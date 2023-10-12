import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [list, setList] = useState(()=>{
    const storedList=JSON.parse(localStorage.getItem("itemlist"));
    return storedList?storedList:[];
  })
  
  useEffect(()=>{
    localStorage.setItem("itemlist",JSON.stringify(list))
  },[list])
  const [task, setTask] = useState("")
  const [show, setShow] = useState(false)
  const [editIndex, setEditIndex] = useState()
  const [checkes, setChecked] = useState(false)



  const addtask = (event) => {
    setTask(event.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    // list.unshift(task)
    if (task.length !== 0) {
      setList([...list, task])
      setTask("")
    }
  }


  const handleDelete = (index) => {
   
    list.splice(index, 1)
    setList([...list])
    
  }


  const handleEdit = (i) => {
    setTask(list[i])
    setShow(true)
    setEditIndex(i)

  }

  const handleUpdate = () => {
    list.splice(editIndex, 1, task)
    setShow(false)
    setTask("")
  }


  const check = () => {
    setChecked(true)
    
  }
  // console.log(list)
  return (
    <>
      <div  class="container glass">
        <h1>To-do-list</h1>
        <div>
          <input  type="text" onChange={addtask} value={task} />
          {!show?<button onClick={handleAdd}>Add task</button>:
          <button onClick={handleUpdate}>Update</button>}
        </div>
        <ul>
          {list.map((todos, i) => <li>
        
            <input type="checkbox" value={task} checked={checkes.i}  onChange={check} />
            
           <span>{todos}</span>
           
          
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={()=> handleDelete(i)}>Delete</button></li>)}
        </ul>
        </div>





    </>
  )
}

export default App
