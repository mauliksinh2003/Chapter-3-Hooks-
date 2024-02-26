import react ,{useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

const Demo = () => {

    const [value , setValue] = useState();

    const {getItem , setItem , remove} = useLocalStorage('value');

    return (
        <div style={{textAlign : "left"}}>

            <h1>Task G</h1>

            <h2>Use Localstorage</h2>
            <br></br>

            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <br></br>

            <button onClick={()=>setItem(value)}>Set</button>
            <button onClick={()=>console.log(getItem())}>Get</button>
            <button onClick={()=>remove()}>Remove</button>
            
        </div>
    )
}

export default Demo;
