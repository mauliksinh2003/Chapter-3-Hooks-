import React from "react";
import { useState } from "react";
import './Taska.css'; 
 

function Taska(){

    const [darkTheme , setDarkTheme] = useState(false);

    const changeTheme = () => {
        setDarkTheme(prevMode => !prevMode);
      };


return(
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
        <h1>Task A</h1>
        <button onClick={changeTheme}>Change theme</button>
       
    </div>
)
}

export default Taska;