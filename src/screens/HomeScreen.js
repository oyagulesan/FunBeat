import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Context as PictureContext} from '../context/PictureContext';

const HomeScreen = ( { navigation } ) => {
    const { state: { personToBeat }, setPersonToBeat } = useContext(PictureContext);

    const persons = [
        { name: 'ece' },
        { name: 'aytekin' }
    ];
    const pics = {
        'ece1': require('../assets/ece11.jpg'),
        'ece2': require('../assets/ece12.jpg'),
        'ece3': require('../assets/ece13.jpg'),
        'aytekin1': require('../assets/aytekin11.jpg'),
        'aytekin2': require('../assets/aytekin12.jpg'),
        'aytekin3': require('../assets/aytekin13.jpg'),
        'effect': require('../assets/effect.png')
    };

    const selectPerson = (item) => {
        setPersonToBeat(item.name);
        navigation.navigate('Beat')
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => selectPerson(item)}
            >
                <View style={{ flex: 1, padding: 20, flexDirection: 'row', borderColor: '#554477', borderWidth: 2 }}>
                    <Text style={{ flex: 2, color: 'white', fontSize: 20 }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                    <Image
                        style={styles.portraitStyle}
                        source={pics[item.name + "1"]}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    return <View style={styles.container}>
        <Text style={{ flex: 1, fontSize: 20, color: 'white', textAlign: 'center' }}>Select person to beat :)</Text>
        <View style={{ flex: 6 }}>
            <FlatList data={persons}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    </View>
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: true,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#332255',
        marginTop: 0,
        paddingTop: 20,

    },
    portraitStyle: {
        width: 100,
        height: 100,
    },

});

export default HomeScreen;