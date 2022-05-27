import { useState } from "react";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import  Container  from "@material-ui/core/Container";
import { FormControl, makeStyles } from "@material-ui/core";
import Button  from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import axios from "axios";


const useStyles = makeStyles({
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block',
        color:'Secondary'
    }
    
})

export default function Create() {
    
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('todos');
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title && details){
            //console.log(title,details,category);
            axios.post('http://localhost:8000/notes',{
                title:title,
                details:details,
                category:category
            })
            .then((res)=>console.log(res))
            .then()
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
                <FormControl className={classes.field}>
                <FormLabel>Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value="money" control={<Radio />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="Work"/>
                </RadioGroup>
                </FormControl>
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