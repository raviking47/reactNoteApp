import React, { useState } from "react";
import plusicon from "../../assest/plus.png";
import "./sidebar.css";
export default function Sidebar(props) {
  const colours = ["red", "blue", "yellow", "green", "orange", "purple",'violet','skyblue','grey'];
  const [listOpen, setlistOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <img src={plusicon} alt="ADD" onClick={()=>setlistOpen(!listOpen)} />
        <ul className={`sidebar_list${listOpen?"sidebar_list_active":""}`}>
          {colours.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: item }}
              className="sidebar_list_item"
              onClick={()=>props.addNote(item)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
