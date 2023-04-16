import 'bootstrap/dist/css/bootstrap.min.css'

import {useState} from 'react'
import './home.css'
import React from 'react'
import AddTaskform from './components/Addform';
import Updateform from './components/Updateform';
import Todo from './components/Todo';

const Home = () => {

    const [todo,setTodo] = useState([
        {id:1,title:"Task 1",status:false},
        {id:2,title:"task 2",status:false}
    ])
    
    const [newTask,setnewTask] = useState("")
    const [update,setUpdate]= useState("") 

    //Add task
    const addTask = () =>{
      if(newTask){
        let num = todo.length + 1;
        let newEntry = {id : num ,title : newTask , status :false}
        setTodo([...todo, newEntry])
      }
      setnewTask('')
    }
    //Delete Task
    const deleteTask = (id)=>{
        let newTask = todo.filter(task => task.id !== id)
        setTodo(newTask)
    }
    //Mark as Done
    const markDone = (id)=>{
        let newTask = todo.map(task => {
            if(task.id === id){
                return({...task, status:!task.status})
            }
            return task;
        })
        setTodo(newTask)
    }
    //Cancel update
    const cancelUpdate = ()=>{
        setUpdate('')
    }
    //change task
    const changeTask = (e)=>{
       let newEntry = {
        id :  update.id,
        title: e.target.value,
        status:update.status ? true : false
       }
       setUpdate(newEntry)
    }
    //update task
    const updateTask = ()=>{
        let filterRecords = [...todo].filter(task => task.id !== update.id)
        let updatedObj = [...filterRecords,update]
        setTodo(updatedObj)
        setUpdate('')
    }
  return (
    <div className='container App'>
    <br/><br/>
    <h2>Todo App</h2>
    <br /><br />
    
    {update && update ? (
        <Updateform
        update={update}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
    ) : (
       <AddTaskform 
       newTask={newTask}
       setnewTask={setnewTask}
       addTask = {addTask}
       />
    )}
    

    {todo && todo.length ? " " : "no tasks...." }
        <Todo 
        todo={todo}
        markDone={markDone}
        setUpdate={setUpdate}
        deleteTask={deleteTask}
        />
    </div>
  )
}

export default Home
