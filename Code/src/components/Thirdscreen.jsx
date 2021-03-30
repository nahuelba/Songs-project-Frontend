import {useState} from 'react'
import { Container, Fade, CardMedia, Tabs, Tab, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({ 
    Tabs:{
        margin:'30px'
    }


}));

const Thirdscreen = ({thirdscreen, links}) => {
    const classes = useStyles();

    const {spotify, youtube} = links

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 


        <Fade in={thirdscreen} timeout={2000}
            
        >
        <main>
            
            <Container maxWidth="md" className={classes.Container}>
                <div >
                
                    <Paper square>
                <Tabs
                    className={classes.Tabs}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                  { youtube ? <Tab label="Youtube" />:null}
                  { spotify ? <Tab label="Spotify" />:null}
                </Tabs>
                </Paper>

                {value===0?
                <CardMedia
                    component='iframe'
                    height="600"
                    src={youtube}
                />
                :
                <CardMedia
                    component='iframe'
                    height="600"
                    src={spotify}
                    />
                }

        
                
               
                </div>
            </Container>
        
        </main>

</Fade>
     );
}

 
export default Thirdscreen;