import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4()
const EditTodo = ({ onUpdateTodo, task }) => {
    const [inputs, setInput] = useState(task.task)

    const submitHandler = (e) => {
        e.preventDefault();

        const listData = {
            id: uuidv4(),
            task: inputs,
            completed: false,
            isEditable: false
        }
        onUpdateTodo(listData, task.id);
        setInput('')

    }

    return (
        <>
            <section id="todo__form">
                <div className="container">
                    <div className="row">
                        <form action="" onSubmit={submitHandler}>
                            <div className="input-group my-2">
                                <input onChange={(e) => setInput(e.target.value)} value={inputs} type="text" className="form-control" placeholder="update task" />
                                <button type="submit" className="btn btn-dark">Update Todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditTodo