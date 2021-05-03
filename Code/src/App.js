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
    //state for links
    const [links, setLinks] = useState({})

    //Consume rest API
    const consumeAPI = async () =>{
        try{
            //Get song
            const api = await fetch('https://songs-project-backend.herokuapp.com/songoftheday/');
            const response = await api.json();
            if(response.length>0){
                setSong(response[0]);
            }else{
                setSong(
                    {
                        "id": 39,
                        "composer": {
                            "interpreter_name": "Wayne Shorter",
                            "interpreter_image": "https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"
                        },
                        "links": [
                            {
                                "interpreters": [
                                    {
                                        "interpreter_name": "Wayne Shorter",
                                        "interpreter_image": "https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"
                                    }
                                ],
                                "embed_youtube_link": "https://www.youtube.com/embed/k0q8mGUHJVQ",
                                "embed_spotify_link": "https://open.spotify.com/embed/track/4W7mDQgJwaLNHuweyq5Yzj"
                            }
                        ],
                        "song_title": "Yes or no",
                        "date_song": "30-03"
                    }
    
                )
            }
            
            
            setChecked(true);
        }catch(err){

            //if cant consume REST API, set song default
            setSong(
                {
                    "id": 39,
                    "composer": {
                        "interpreter_name": "Wayne Shorter",
                        "interpreter_image": "https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"
                    },
                    "links": [
                        {
                            "interpreters": [
                                {
                                    "interpreter_name": "Wayne Shorter",
                                    "interpreter_image": "https://songs-project-backend.herokuapp.com/media/artistimages/Wayne_Shorter.jpg"
                                }
                            ],
                            "embed_youtube_link": "https://www.youtube.com/embed/k0q8mGUHJVQ",
                            "embed_spotify_link": "https://open.spotify.com/embed/track/4W7mDQgJwaLNHuweyq5Yzj"
                        }
                    ],
                    "song_title": "Yes or no",
                    "date_song": "30-03"
                }

            )
            setChecked(true);
        }

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
            Song= {Song}
            
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