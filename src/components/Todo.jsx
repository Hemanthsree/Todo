import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons'
const Todo = ({todo,markDone,setUpdate,deleteTask})=>{
    return(
       <>
           {todo && todo.sort((a,b)=>a.id > b.id ? 1 : -1)
    .map((task,index)=>{
        return (
            <React.Fragment key={task.id}>
                <div className="col taskbg">
                    <div className={task.status ? 'done' : ' '}>
                    <span className='tasknumber'>{index+1}</span>
                    <span className='tasktext'>{task.title}</span>
                    </div>
                    <div className="iconswrap">

                        <span title='completed/notcompleted' onClick={()=> markDone(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}/>
                        </span>
                        {task.status ? null : (
                            <span title='edit' onClick={()=>setUpdate({id : task.id , title : task.title , status : task.status ? true : false})}>
                            <FontAwesomeIcon icon={faPen}/>
                             </span>
                        )}                    
                        <span title='delete' onClick={()=>deleteTask(task.id)}>
                             <FontAwesomeIcon icon={faTrashCan}/>
                        </span>
                    </div>
                </div>
            
            </React.Fragment>
        )
    })}
       </>
    )
}
export default Todo