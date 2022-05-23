import { Button, Typography } from "@material-ui/core";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import  Container  from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    
})

export default function Home() {
    const classes = useStyles();
    return (
        <Container>
           
            <Typography

                color="primary"
                gutterBottom={true}

            >
            Information
            </Typography>
            <Button
                
                variant="outlined"
                color="primary"
                endIcon={<SendOutlinedIcon />}
            >
            submit
            </Button>

        </Container>
    )

}