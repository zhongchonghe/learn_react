import React,{useState} from 'react'

export default function Hooks() {
    const [state, setstate] = useState(0)
    return (
        <div>
            <span>值为:{state}</span>
            <button onClick={()=>setstate(state+1)}>+1</button>
        </div>
    )
}

