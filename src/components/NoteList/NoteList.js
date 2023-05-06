import React from 'react'
import './NoteList.css';

function Notelist(props) {
  return (
    <li className="list-item">
        {props.item}
    </li>
  )
}

export default Notelist
