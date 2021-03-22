import { Typography, Container, Button, Fade, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    Container:{
        margin: 0,
        position: 'absolute',
        left: '50%', 
        top: '40%',
        textAlign:'center',
        transform: 'translate(-50%, -50%)'
    },
    Button:{
        height:'60px',
    },
    Title:{
        margin:'20px'
    }


}));


const Secondscreen = ({secondscreen, composer, interpreterslinks, setLinks, setThirdscreen}) => {
    const classes = useStyles();
    
    const { interpreter_name} = composer

    const SETLinks = (spotify, youtube) =>{
    setLinks(
        {
            spotify:spotify, 
            youtube:youtube
        })
    setThirdscreen(true);

    
    


    }

    return (
        <Fade in={secondscreen} timeout={2000}>
            <main>
                
                <Container maxWidth="md" className={classes.Container}>
                    <div >
            
                        <Typography variant="h4" className={classes.Title}>Composer: <strong> {interpreter_name}</strong> </Typography>
                        <Typography variant="h4" className={classes.Title}>Interpreters (select one): </Typography>

                        {interpreterslinks.map(interpreter =>
                            <Button size="large" className={classes.Button} fullWidth onClick={() => SETLinks(interpreter.embed_spotify_link, interpreter.embed_youtube_link)}>
                                {interpreter.interpreter_name} <Avatar className={classes.Title} alt={interpreter.interpreter_name} src={interpreter.interpreter_image} />
                            </Button>
                        )}
                        
                    
                   
                        </div>
                </Container>
            
            </main>

        </Fade>
     );
}


 
export default Secondscreen;