import { useState } from "react";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import  Container  from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Button  from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block',
        color:'Secondary'
    }
    
})

export default function Home() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title && details){
            console.log(title,details);
        }
    }
    return (
        <Container>
            <Typography
                color="primary"
                gutterBottom={true}
            >
            Information
            </Typography>

            <form noValidate  onSubmit={handleSubmit}>
                <TextField 
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField 
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    endIcon={<SendOutlinedIcon />}
                >submit
                </Button>
                
                
            </form>

            

            

        </Container>
    )

}