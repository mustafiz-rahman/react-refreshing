import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";


export default function NoteCard({note,handleDelete}){
    return(
        <div>
            <Card>
                <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(note.id)} >
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader ={note.category}

                />
                <CardContent>
                    <Typography>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}