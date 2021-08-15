import { Button, FormControl, InputLabel, Input, List, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import './App.css';
import Todo from './Todo';
import {db} from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [secondaryInput, setsecondaryInput] = useState('')

  // when the app loads, we need to listen to the database and fetch new todos

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      const todo =  snapshot.docs.map(doc => ({id : doc.id, todo : doc.data().todo, secondary : doc.data().secondary}))
      setTodos(todo)
    })
  }, [])
console.log(todos);

  const addTodo = (e) =>{
    e.preventDefault()

    db.collection('todos').add({
      todo : input, 
      timestamp : firebase.firestore.FieldValue.serverTimestamp(), 
      secondary : secondaryInput
    })

    setInput('')
   }
  return (
    <div className="App">
     <h1>Task Manager</h1>
     <form onSubmit={addTodo} action="">
      <FormControl>
        <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
        <Input id="my-input" value={input} onChange={e => setInput(e.target.value)} />
    </FormControl>
    <FormControl>
    <InputLabel htmlFor="my-secondary-input" color="secondary">Todo Secondary Line</InputLabel>
    
        <Input id="my-secondary-input" value={secondaryInput} color="secondary" onChange={e => setsecondaryInput(e.target.value)} />
    </FormControl>
     <Button disabled={!input || !secondaryInput} type="submit" variant="contained" color="primary">
      Add Todo
      </Button>
    
     </form>
     <div>
      <List>
        {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </List>
      </div>
    </div>
  );
}

export default App;
