const AddTaskform = ({newTask ,setnewTask,addTask })=>{
    return(
        <>
        <div className="row">
            <div className="col">
                <input value={newTask} onChange={(e)=>setnewTask(e.target.value)} className="form-control form control-lg" type="text" />
            </div>
            <div className="col-auto">
                <button
                onClick={addTask}
                className='btn btn-md btn-success'
                >Add Task</button>
            </div>
        </div>
        </>
    )
}
export default AddTaskform