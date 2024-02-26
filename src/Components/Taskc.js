import React , {useState ,createContext} from "react";

export const TaskContext = createContext();

function Taskc(props){

    const[lang,setLang]=useState("english")

    return(

        <TaskContext.Provider value={[lang,setLang]}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default Taskc;