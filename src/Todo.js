import { ListItem, ListItemText, Button, Modal, FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react';
import { db } from './firebase';
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useState } from 'react';


const Todo = ({todo}) => {

    const [input, setInput] = useState('')
    const handleClick = () =>{
        db.collection('todos').doc(todo.id).set({
            todo : input
        }, 
        {merge : true}
        )
    }
    return (
            <>
       
            <ListItem>
                <ListItemText primary={todo.todo} secondary={todo.secondary}>
                </ListItemText>
                <FormControl>
        <Input id="my-input" placeholder={todo.todo} type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <Button onClick={handleClick} variant="outlined">Update</Button>
                
    </FormControl>
                <Button onClick={e => db.collection('todos').doc(todo.id).delete()} variant="contained" color="secondary"><DeleteForeverIcon/> &nbsp;DELETE ME</Button>
               


            </ListItem>
           
            </>
    );
};

export default Todo;
