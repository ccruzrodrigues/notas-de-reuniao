
import React, { useState } from 'react'
import "./App.css"
import NoteInput from './components/NoteInput/NoteInput'
import Notelist from './components/NoteList/NoteList';
function App() {
  const [listNote,setListNote]=useState([]);
  let addList = (inputText)=>{
    if(inputText !== '')
      setListNote([...listNote,inputText]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <NoteInput addList={addList}/>
        <h1 className="app-heading">Notas da Reunião de Times Ágil</h1>
        <hr/>
        {listNote.map((listItem)=>{
          return (
            <Notelist item={listItem} />
          )
        })}
      </div>
    </div>
  )
}

export default App



