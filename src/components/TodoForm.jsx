import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4()
const TodoForm = ({ onAddTodo }) => {
    const [inputs, setInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        const listData = {
            id: uuidv4(),
            task: inputs,
            completed: false,
            isEditable: false
        }
        onAddTodo(listData);
        setInput('')

    }

    return (
        <>
            <section id="todo__form">
                <div className="container my-5">
                    <div className="row">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-group my-2">
                                <input onChange={(e) => setInput(e.target.value)} value={inputs} type="text" className="form-control" placeholder="what is the task today?" />
                            </div>
                            <button type="submit" className="btn btn-dark">Add Todo</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TodoForm