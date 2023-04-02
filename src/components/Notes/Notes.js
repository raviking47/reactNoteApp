import React from 'react'
import './Notes.css'
import deleteicon from '../../assest/delete.png'
import { now } from 'mongoose'
export default function Notes(props){
  const date = new Date(props.note.time)
  let hour = date.getHours()
  let mint = date.getMinutes()
  let sec  =  date.getSeconds()
  let day = date.getDay()
  let Day = date.getDate()
  let month= date.getMonth()
  let year = date.getUTCFullYear()
  let  time = hour+':'+mint+':'+sec+' '+Day+'/'+month+'/'+year


  
  
   
  return (
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note_text" defaultValue={props.note.text}/> 
            <p>
              <div className="note_footer">
               {time}
              <img src={deleteicon} alt="DELETE"  onClick={() => props.deleteNote(props.note.id)}/>
              </div>
            </p>
        </div>
    </>
  )
}
