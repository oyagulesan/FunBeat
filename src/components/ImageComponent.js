import React, { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Context as PictureContext } from '../context/PictureContext';
import FastImage from 'react-native-fast-image'

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const ImageComponent = (props) => {  
    const { state: { picture, personToBeat } } = useContext(PictureContext);

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
            <FastImage           
                style={styles.pictureStyle}
                source={pics[personToBeat+picture]}
                resizeMode={FastImage.resizeMode.stretch}
            />

    );
};
const styles = StyleSheet.create({
    pictureStyle: {
        width:  winWidth,
        height: winHeight,
        marginTop: 0
    }
});

export default ImageComponent;
