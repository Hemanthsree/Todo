const Updateform = ({update,changeTask,updateTask,cancelUpdate })=>{
    return(
        <>
        {/* update task */}
        <div className="row">
            <div className="col">
                <input value={update && update.title}
                onChange={(e)=>changeTask(e)} className="form-control form control-lg" type="text" />
            </div>
            <div className="col-auto">
                <button
                onClick={updateTask}
                className='btn btn-md btn-secondary mr-20'
                >Update</button>
                <button
                onClick={cancelUpdate}
                className='btn btn-md btn-warning'
                >Cancel</button>
            </div>        
        </div>
        </>
    )
}
export default Updateform