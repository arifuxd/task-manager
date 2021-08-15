import { ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import React from 'react';
import { db } from './firebase';
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useState } from 'react';
const Todo = ({todo}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true)
    }
   
    return (
            <>
            <Modal 
            open={open}
            onClose = {(e) => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div>
                    <h1>I am a Modal</h1>
                    <button onCLick={()=> setOpen(false)}>Close</button>
                </div>
            </Modal>
            <ListItem>
                <ListItemText primary={todo.todo} secondary={todo.secondary}>
                </ListItemText>
                <Button onClick={e => db.collection('todos').doc(todo.id).delete()} variant="contained" color="secondary"><DeleteForeverIcon/> &nbsp;DELETE ME</Button>
            </ListItem>
            <Button onClick={e => setOpen(true)}>Edit</Button>
            </>
    );
};

export default Todo;
