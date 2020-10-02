import React, { useEffect, useState } from 'react';
import { Text, Button, Image, View, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { Header, Rating } from 'react-native-elements';
import TrackPlayer, { RATING_3_STARS } from 'react-native-track-player';
//import the hook provided by react-native-track-player to manage the progress
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
//import statement for slider
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';


import LinearGradient from 'react-native-linear-gradient'

const trackPlayerInit = async () => {

  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: '1',
    url:
      'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    type: 'default',
    title: 'My Title',
    album: 'My Album',
    artist: 'Rohan Bhatia',
    artwork: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg',
  });


  return true;
};

const Player = () => {



  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [image, setImage] = useState(require('../assets/play.png'));


  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);

  //flag to check whether the use is sliding the seekbar or not
  const [isSeeking, setIsSeeking] = useState(false);

  //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
  //These values will update every 250ms 
  const { position, duration } = useTrackPlayerProgress(250);


  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

  //this hook updates the value of the slider whenever the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const onButtonPressed = () => {

    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
      setImage(require('../assets/Pause.png'));

    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
      setImage(require('../assets/play.png'));

    }
  };
  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);

  };
  var plays = { image }

  return (
    <>
      <Header
        containerStyle={{ backgroundColor: '#0b2242' }}
        leftComponent={{ icon: 'keyboard-arrow-down', color: '#fff' }}
        centerComponent={{ text: 'Ouvindo agora', style: { color: '#fff' } }}
        rightComponent={{ icon: 'favorite', color: '#fff' }}
      />


      <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", backgroundColor: '#0b2242' }}>
        <View style={{ flex: 4, flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg" }} style={{ width: 300, height: 300, alignSelf: "flex-start", marginTop: 20, borderRadius: 150, borderWidth: 5, borderColor: '#051730' }} />
        </View>

        <View style={{ flex: 1 }}>


        </View>

        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", backgroundColor: "#0b2242", justifyContent: "center" }}>
          <View>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: "bold" }}>Tears In Heaven </Text>
          </View>
          <View>
            <Text style={{ color: '#fff' }}>Eric Clapton</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", flexWrap: "nowrap", alignItems: "flex-start" }}>
          {/* defining our slider here */}
         <Text> {TrackPlayer.artist} </Text> 
          <Slider
            style={{ width: 400, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="#fff"
            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 30 }}>
          <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <Image source={require('../assets/back.png')} style={{ width: 25, height: 25, alignSelf: "center", marginTop: 20 }} />
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <TouchableOpacity onPress={onButtonPressed} >
              <Image source={image} style={{ width: 65, height: 65, alignSelf: "center", marginTop: 20 }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
            <Image source={require('../assets/previous.png')} style={{ width: 25, height: 25, alignSelf: "center", marginTop: 20 }} />
          </View>

        </View>


      </View>


    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
})
export default Player;