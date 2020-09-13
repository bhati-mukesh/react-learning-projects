import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) =>{

    const [line,setLine] = useState(false)

    const lineThrough = () =>{
        setLine(true)
    }

    return (
    <>
    <div className="todo_style">
        <span onClick={lineThrough} >
            <DeleteIcon className="deleteIcon" />
        </span>
    <li style={{textDecoration: line ? "line-through" : "none" } }  >{props.text}</li>
    </div>
    </>
);
}

export default TodoItem