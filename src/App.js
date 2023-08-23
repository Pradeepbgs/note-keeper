import logo from './logo.svg';
import './App.css';
import CreateArea from './CreateArea';
import Note from './Note';
import Header from './Header';
import { useState } from 'react';

function App(){

  const [Notes, setNotes] = useState([])

function submitNote(Note){
  setNotes((prevValue)=>{
    return[...prevValue, Note]
  })
}


function deleteItems(id){
  setNotes((prevValue)=>{
    return prevValue.filter((currentItem, index)=>{
        return index !== id 
    })
  })
}
  

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={submitNote} />
      {
        Notes.map((todoitem, index)=>{
          return <Note id={index} key={index} title={todoitem.title} note={todoitem.note} onDelete={deleteItems} />
        })
      }
      
    </div>
  );
}

export default App;
