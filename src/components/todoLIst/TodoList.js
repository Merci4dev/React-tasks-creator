
import React,{useState, useEffect} from 'react'
// import './todoListStyles.css'

import Form from './Form'
import Table from './Table'
import Visible from './Visible'


function TodoLIst() {
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  // Funtion to create a task
const createTask = (taskName) =>{
    // to create an id to the each task
    const id = Date.now();

    // validation. if the task name is empty throw an alert
    if(taskName === ''){
      return alert('Task Name can not be empty!!')
    }

    // loop throw my list if there is not a task with thid name creare it. Each task will be create like an object
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {name:taskName, id:id, done: false }])
    } 
}

// function to update a task, change the input from true to false
function  toggleTasks (task){
  // it looks for the element and changes its property and if the property is equal to the name in question it returns an obj which is a copy of the user and changes the property. and otherwise keep the user. and returns a new array (taskItems)
  setTaskItems(
    taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
  )
}

// hanges. we will use it to save the data in the storage. It keeps an eye on the variable y[taskItems] and if it changes it executes the internal function
useEffect(() =>{
  let data = localStorage.getItem('tasks')
  if(data){
    setTaskItems(JSON.parse(data))
    console.log(data)
  }
},[ ])


// The useEffect is executed every time my variable change. we will use it to save the data in the storage. It keeps an eye on the variable y[taskItems] and if it changes it executes the internal function
useEffect(() =>{
  localStorage.setItem('tasks', JSON.stringify(taskItems))
})


//function to delete the task
const clearTasks = () =>{
  setTaskItems(
    taskItems.filter(task => !task.done)
  )

  setShowCompleted(false)
}

  return (
    <div>
        <div className='text-white'>
            <Form
              createTask={createTask}
              />
        </div>

        {/* logic to show or not the tasks done */}
        <div>
           <Table
           tasks={taskItems}
           toggleTasks={toggleTasks}
           />

          <Visible
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            clearTasks={clearTasks}
          />

          {/* If checked is on true will display the table */}
          {
            showCompleted === true && (
              <Table
              tasks={taskItems}
              toggleTasks={toggleTasks}
              showCompleted={showCompleted}
              />
            )
          }
        </div>
    </div>
  )
}

export default TodoLIst