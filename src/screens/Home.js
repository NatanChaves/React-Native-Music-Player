import React, {useEffect, useState} from 'react';
import {Text, Button} from 'react-native';
//import the TrackPlayer  
import TrackPlayer from 'react-native-track-player';

//function to initialize the Track Player 
const trackPlayerInit = async () => {
 await TrackPlayer.setupPlayer();
 await TrackPlayer.add({
   id: '1',
   url:
     'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
   type: 'default',
   title: 'My Title',
   album: 'My Album',
   artist: 'Rohan Bhatia',
   artwork: 'https://picsum.photos/100',
 });
 return true;
};
 
const Home = () => {
 
 //state to manage whether track player is initialized or not
 const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
 const [isPlaying, setIsPlaying] = useState(false);

 
 //initialize the TrackPlayer when the App component is mounted
 useEffect(() => {
   const startPlayer = async () => {
      let isInit =  await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
   }
   startPlayer();
 }, []);

//start playing the TrackPlayer when the button is pressed 
const onButtonPressed = () => {
  if (!isPlaying) {
    TrackPlayer.play();
    setIsPlaying(true);
  } else {
    TrackPlayer.pause();
    setIsPlaying(false);
  }
}
 
 
 return (
   <>
     <Text>Music Player</Text>
     <Button
       title="Play"
       onPress={onButtonPressed}
       disabled={!isTrackPlayerInit}
     />
   </>
 );
};
 
export default Home;