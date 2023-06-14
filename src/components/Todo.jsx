import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi'
const Todo = ({ task, onComplete, onDelete, onUpdate }) => {
    return (
        <>
            <section id="todo__form">
                <div className="container">
                    <div className="row">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span onClick={() => onComplete(task.id)}
                                    className={`${task.completed ? 'strike' : ''}`}>{task.task}</span>
                                <div className="action float-end">
                                    <i onClick={() => onUpdate(task.id)}><BiEdit /></i>
                                    <i onClick={() => onDelete(task.id)}><AiFillDelete /></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Todo