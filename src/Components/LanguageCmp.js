import React, { useState, useContext } from "react";
import { TaskContext } from "./Taskc";

function LanguageCmp() {

    const [language, setLanguage] = useState(TaskContext)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Task C</h1>
            <div >
                <br />
                <br />
                <select onClick={(e) => { setLanguage(e.target.value) }}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select>
                <br />
                <br />
                <div>
                    {
                        language === "en" ? <h1>Hello !! How are you ?</h1> : <h1>Bonjour !! Comment vas-tu ?</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default LanguageCmp;
