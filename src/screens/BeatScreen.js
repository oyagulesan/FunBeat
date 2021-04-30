import React from 'react';
import { View, StyleSheet } from 'react-native';
import PictureComponent from '../components/PictureComponent';


const BeatScreen = () => {
    return <View style={styles.container}>
        <PictureComponent />
    </View>
};

BeatScreen.navigationOptions = () => {
    return {
        headerShown: true,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4c69a5'
    }
});

export default BeatScreen;