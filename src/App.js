import { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {  CssBaseline, CircularProgress } from '@material-ui/core';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Secondscreen from './components/Secondscreen';
import Thirdscreen from './components/Thirdscreen';


const useStyles = makeStyles((theme) => ({

    Spinner:{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },


}));

const App = () =>{
    //state for page load
    const [checked, setChecked] = useState(false);
    //state for song
    const [Song, setSong] = useState({});
    //state for second screen
    const [secondscreen, setSecondscreen] = useState(false);   
    //state for set third screen
    const [thirdscreen, setThirdscreen] = useState(false);
    //state for composer
    const [composer, setComposer] = useState({}) 
    //state for interpreters_links
    const [interpreterslinks, setInterpreterslink] = useState([])
    //state for links
    const [links, setLinks] = useState({})

    //Consume rest API
    const consumeAPI = async () =>{
        //Get song
        const api = await fetch('https://songs-project-backend.herokuapp.com/songoftheday/');
        const songoftheday = await api.json();
        setSong(songoftheday[0]);

        //GET List of interpreters
        const interpretersAPI = await fetch('https://songs-project-backend.herokuapp.com/song/links/interpreter/');
        const interpreters = await interpretersAPI.json();

        //get composer
        const composer = interpreters.filter(interpreter =>{
            return interpreter.id === songoftheday[0].composer
        })
        setComposer(composer[0])


        //GET List of links
        const linksAPI = await fetch('https://songs-project-backend.herokuapp.com/song/links/');
        const links = await linksAPI.json();


        
        //Get Links
        const linkss = links.filter(link =>{
            return songoftheday[0].links.includes(link.id)
        })

        //fusion 
        // eslint-disable-next-line
        linkss.map(link => {
            // eslint-disable-next-line
            interpreters.map(interpreter => {
                
                if(link.interpreters.includes(interpreter.id)){
                    let newinterpreterlink = {
                        ...link,
                        interpreter_name:interpreter.interpreter_name,
                        interpreter_image:interpreter.interpreter_image
                    }
                    setInterpreterslink(interpreterslinks => [...interpreterslinks, newinterpreterlink]);
                    
                }
                
            })
              
          })  
        setChecked(true);

    }    
    //when page loads
    useEffect(() => {
        consumeAPI();
    }, [])


    const classes = useStyles();
    return(
        <Fragment>
        <CssBaseline />
            <Navbar />

        {
        // for load
        !checked ?
    
        <CircularProgress 
           className={classes.Spinner}
        
        />


        :

        !thirdscreen ?
            
             !secondscreen ?
            <Title 
                Song = {Song}
                checked = {checked}
                setSecondscreen = {setSecondscreen}
            /> :

                
            <Secondscreen
            secondscreen={secondscreen}
            composer={composer}
            
            interpreterslinks={interpreterslinks}
            setLinks={setLinks}
            setThirdscreen={setThirdscreen}
            
            />
            
                 :

                <Thirdscreen
                thirdscreen={thirdscreen}
                links={links}
                
                />
            
        }

            
        

        </Fragment>

        
    )
}

export default App;