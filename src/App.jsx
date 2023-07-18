import { useState } from "react"



function App() {
  const [task,setTask] = useState('')
  const [list,setList] = useState([])
  

  // Form handling..
  const formHanlde = (event)=> {
    event.preventDefault()
  }
  // Onchange value setting to setTask from input field..
  const onChange = (event)=> {
    setTask(event.target.value)

  }

  // adding to list ..
  const addToList = ()=> {
    if(task.trim() !== ''){
      list.push(task)
      setList([...list])
      setTask('') // clearing the input field once it submitted
    }else{
      alert("Kicchu likhen vai")
    }
  }

  // Removing new added task form list 
  const removeList = (index)=> {
    list.splice(index,1)
    setList([...list])
  }

  // mark as complete function 
  const markComplete = ()=> {
    alert('Eita partesina vai')
  }

 

  return (
    <>
        <form onSubmit={formHanlde} >
          <div className="row">

              <div className="column column-75">
                <input onChange={onChange} type="text" value={task} placeholder="Enter a new task" />
              </div>

              <div className="column column-25">
                <button onClick={addToList} className="button-primary">Add Task</button>
              </div>
          </div>
      </form>
      
      <div className="container">
        <table>
          <tbody>
            {
              list.map((element,index) => {
                return (
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{
                      removeList(index)
                    }}>Remove</button></td>
                    <td key={index}><button onClick={()=> {
                      markComplete()
                    }}>Mark as read</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

     
    
    </>
  )
}

export default App
