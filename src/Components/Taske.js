import React,{useRef , useEffect } from "react";

function Taske(){
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
      });
    
      return (

        <div>
        <h1>Task E </h1>
        <br/>
        <h3>Auto focus in textarea</h3>

          <input ref={inputRef} type="text" />
        </div>
      );
}

export default Taske;