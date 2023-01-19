import { useState } from "react";

const Example = ()=>{
    const [data, setData] = useState('');

    const [display, setDisplay] = useState([]);

    const submitHandle=(e)=>{
        e.preventDefault();
        setDisplay();

        console.log(display);
    }

    return <div>
        <h1>Example</h1>

        <form onSubmit={submitHandle}>
            <input type={'text'}
            onChange={(e)=>setData(e.target.value)} 
            value={data} placeholder="Enter"/>
            <button type="submit">Add</button>
        </form>
    </div>
}

export default Example;