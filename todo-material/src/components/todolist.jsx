import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TodoItem from './todoitem'

const TodoList = () =>{

    const [item,setItem] = useState('');

    const [items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);
    } 

    const addItem = (event) =>{
        if(item.length!=0){
        setItems((preValues)=>{
            return [...preValues,item]
        })
        setItem('')
    }
    }



    return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1> ToDo List</h1>
            <br/>
            <input type="text" placeholder="Add an item" onChange={itemEvent} value={item} />
            <Button className="newBtn" onClick={addItem} ><AddIcon/> </Button>
            <br/>
            <ol>
                {/* <li>{item}</li> */}
                {
                    items.map((element,index)=>{
                        return <TodoItem text={element} key={index} id={index} />
                    })
                }
            </ol>
            <br/> 
        </div>
    </div>
    </>

);
}

export default TodoList