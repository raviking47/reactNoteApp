import React, { useState } from "react";
import "./App.css";
import Notecontainer from "./components/Notecontainer/Notecontainer";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  // const colours = ["red", "blue", "yellow", "green", "orange", "purple",];

  const [notes,setNotes] = useState([
    

  ])
  const tempNotes=[...notes]
  const addNote = (color)=>(
    
    tempNotes.push({
      id:Date.now()+""+Math.floor(Math.random(+78)),
      text:"",
      time:Date.now(),
      color,
    }),
    setNotes(tempNotes)
    
    )
    const deleteNote = (id) => {
      const tempNotes = [...notes];
  
      const index = tempNotes.findIndex((item) => item.id === id);
      if (index < 0) return;
  
      tempNotes.splice(index, 1);
      setNotes(tempNotes);
    };
    
    

  
    return (
    
    <>   
       <div className="App">
       <Sidebar addNote={addNote}/>
        <Notecontainer notes={notes} deleteNote={deleteNote} />
       </div>
    </>
  );
}

export default App;
