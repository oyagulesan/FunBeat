import React, { useContext, useEffect, useState } from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const winWidth = Dimensions.get('window').width;

const TitleComponent = (props) => {    
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: -20,
            width: winWidth + 20,
            backgroundColor: '#007799',
            alignContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Text style={{flex: 1, marginRight: 50, textAlign: 'center', color: '#eee', fontSize: 24, fontWeight:'bold'}}>BEAT!!!</Text>
        </View>
    );
};

export default TitleComponent;
