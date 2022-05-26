import axios from "axios"
import { useEffect, useState } from "react"

export default function Notes(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/notes')
        .then((res)=>{
            setNotes(res.data);
            console.log(res.data)
        })
        
    },[])

    return(
        <div>
            {notes.map(note=>(
                <h1 key={note.id}>{note.title}</h1>
            ))}
        </div>
    )

}