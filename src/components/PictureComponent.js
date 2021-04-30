import React, { useContext, useEffect } from 'react';
import {View, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Context as PictureContext } from '../context/PictureContext';
import SmashComponent from './SmashComponent';
import ImageComponent from './ImageComponent';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

let tmr = null;
let tmr2 = null;
var Sound = require('react-native-sound');

const PictureComponent = (props) => {  
    const { state: { picture, personToBeat }, setPicture, setPos } = useContext(PictureContext);
    Sound.setCategory('Playback');


    const playOuch = () => {
        let fileName = 'girl_ouch.mp3';
        if (personToBeat == 'aytekin') {
            fileName = 'man_ouch.mp3';
        }
        var ouchSound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + ouchSound.getDuration() + 'number of channels: ' + ouchSound.getNumberOfChannels());
          
            // Play the sound with an onEnd callback
            ouchSound.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          });
          
          // Reduce the volume by half
          // ouchSound.setVolume(0.5);
          
          // Position the sound to the full right in a stereo field
          // ouchSound.setPan(1);
          
          // Loop indefinitely until stop() is called
          ouchSound.setNumberOfLoops(-1);
          
          // Get properties of the player instance
          console.log('volume: ' + ouchSound.getVolume());
          console.log('pan: ' + ouchSound.getPan());
          console.log('loops: ' + ouchSound.getNumberOfLoops());
          
          // Seek to a specific point in seconds
          // ouchSound.setCurrentTime(2.5);
          
          // Get the current playback point in seconds
          // ouchSound.getCurrentTime((seconds) => console.log('at ' + seconds));
          
          // Pause the sound
          // ouchSound.pause();
          
          // Stop the sound and rewind to the beginning
          ouchSound.stop(() => {
            // Note: If you want to play a sound after stopping and rewinding it,
            // it is important to call play() in a callback.
            ouchSound.play();
          });
          
          // Release the audio player resource
          ouchSound.release();
          
    }


    const onLeftHit = (event) => {
        playOuch();
        clearTimeout(tmr);
        clearTimeout(tmr2);
        setPos({ x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY});
        setPicture('2');

        tmr = setTimeout(() => {
            setPicture('1');
            console.log('...tmr 1 exp');
        }, 2500);
        tmr2 = setTimeout(() => {
            setPos({x: 0, y: 0})
        }, 1000);
    }
    const onRightHit = (event) => {
        playOuch();
        clearTimeout(tmr);
        clearTimeout(tmr2);
        setPos({ x: event.nativeEvent.pageX,
            y: event.nativeEvent.pageY});
        setPicture('3');
        tmr = setTimeout(() => {
            setPicture('1');
            console.log('...tmr 2 exp');
        }, 2500);
        tmr2 = setTimeout(() => {
            setPos({x: 0, y: 0})
        }, 1000);
    }

    console.log('..picture: ', picture);
    useEffect(() => {
        setPicture('1');
        return () => {
            if (tmr) {
                clearTimeout(tmr);
            }
            if (tmr2) {
                clearTimeout(tmr2);
            }
        }
    }, []);

    const pics = {
        '1': require('../assets/1.jpg'),
        '2': require('../assets/2.jpg'),
        '3': require('../assets/3.jpg'),
        'ece1': require('../assets/ece11.jpg'),
        'ece2': require('../assets/ece12.jpg'),
        'ece3': require('../assets/ece13.jpg'),
        'aytekin1': require('../assets/aytekin11.jpg'),
        'aytekin2': require('../assets/aytekin12.jpg'),
        'aytekin3': require('../assets/aytekin13.jpg'),
        'effect': require('../assets/effect.png')
    };

    return (
        <View style={{
            flex: 1,
        }}>
            <ImageComponent />           
            <SmashComponent/>
            <TouchableOpacity 
                style={styles.leftPane}
                onPress={onLeftHit}
            />
            <TouchableOpacity 
                style={styles.rightPane}
                onPress={onRightHit}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    leftPane: {
        position: 'absolute',
        top: 100,
        left: 10,
        height: winHeight - 130,
        width: winWidth / 2 - 8,
        zIndex: 100,
    },
    rightPane: {
        position: 'absolute',
        top: 100,
        right: 10,
        height: winHeight - 130,
        width: winWidth / 2 - 8,
        zIndex: 100
    }
});

export default PictureComponent;
