import React, { useContext } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Context as PictureContext } from '../context/PictureContext';


const SmashComponent = (props) => {  

    const { state: { pos }} = useContext(PictureContext);

    const pics = {
        'effect': require('../assets/effect.png')
    };

    return (
        <>
            { pos && pos.x != 0 && pos.y != 0 ? 
            <Image           
                style={{...styles.effectStyle, position: 'absolute', left: pos.x-50, top: pos.y - 120 }}
                source={pics['effect']}
                resizeMode={'stretch'}
            /> : null}
        </>
    );
};
const styles = StyleSheet.create({
    effectStyle: {
        width: 120,
        height: 120
    },
});

export default SmashComponent;
