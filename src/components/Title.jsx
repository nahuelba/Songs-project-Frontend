import { Typography, Container, Button, Fade } from '@material-ui/core';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    Song:{
        color:'#48c774',
        margin:'20px'

    },
    Title:{
        marginBottom:'20px'
        
    },
    Container:{
        margin: 0,
        position: 'absolute',
        left: '50%', 
        top: '40%',
        textAlign:'center',
        transform: 'translate(-50%, -50%)'
    },


}));


const Title = ({Song, checked, setSecondscreen}) => {
    const classes = useStyles();

    const {song_title} = Song

    return ( 
        <Fade in={checked} timeout={2000}>
            <main>
                
                <Container maxWidth="md" className={classes.Container}>
                    <div >
                
                        <Typography variant="h2" > The song of the day is: </Typography>
                        <Typography variant="h3" className={classes.Song}>{song_title}</Typography>
                        <Typography variant="h4" className={classes.Title}>Enjoy it! <FreeBreakfastIcon /></Typography>
                        <Button variant="outlined" color="primary" fullWidth onClick={setSecondscreen}>
                            Next
                        </Button>
                    
                   
                        </div>
                </Container>
            
            </main>

</Fade>
     );
}
 
export default Title;