import React from 'react'
import Notes from '../Notes/Notes'
import './Notescontainer.css'

export default function Notecontainer(props) {
 
    
  return (
   
    <>
    <div className="note-container">
        <h1>Notes App in React</h1>
        <div className="note-container-notes custom-scroll">
            {
                props.notes.map((item,index)=>(
                    <Notes 
                     key = {index}
                     note = {item}
                     deleteNote={props.deleteNote}/>
                ))
            }
 

    </div>
    </div>
    </>
  )
}
