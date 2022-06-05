import axios from "axios"
import { useEffect, useState } from "react"
import { Grid } from "@material-ui/core"
import NoteCard from "../components/NoteCard"
import { Container } from "@mui/system"


export default function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/notes')
            .then((res) => {
                setNotes(res.data);
                //console.log(res.data)
            })

    }, []);
    const handleDelete= async (id) =>{
        await axios.delete('http://localhost:8000/notes/'+id);

        const newNotes = notes.filter(note=>note.id!==id)

        setNotes(newNotes);

    }

    return (
        <Container>

            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleDelete={handleDelete}/>

                    </Grid>
                ))}

            </Grid>

        </Container>
    )

}