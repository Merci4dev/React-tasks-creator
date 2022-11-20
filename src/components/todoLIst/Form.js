// form component.
import React,{useState} from 'react'

function Form({createTask}) {
  const [taskName, setTaskName] = useState('')
  
//   this function handle the onSubmit event
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    // on form submit creare a task
    createTask(taskName)

       // linpia el form
       setTaskName('')

  }

    // #1 This way of capturing input values ​​is captured as a object
    //   const handleChange = (e) =>{
    //     setTaskName({
    //         ...taskName, [e.target.name]: e.target.value
    //     })
    //   }

    return (
    <div>
        <form onSubmit={handleSubmit} className='my-2 row'>
            
          {/* #2 This way of capturing input values ​​is captured as a string */}
            <div className='col-8 '>
            <input 
                type='text' 
                name='task'
                placeholder='Enter a Task'
                onChange={e => setTaskName(e.target.value)} 
                value={taskName}
                className='form-control'
                />  
            </div> 

            <div className='col-4 '>
            <button className='btn btn-primary btn-sm ' onClick={e => createTask(taskName)}>
                Create Task
            </button>
            </div>
        </form>
    </div>
  )
}

export default Form