import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {Header} from "react-native-elements";

const Home = () => {

    const playlist = [
        {
            id: '1',
            url:
                'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg',
        },
        {
            id: '2',
            url:
                'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg',
        },
        {
            id: '3',
            url:
                'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg',
        },
        {
            id: '4',
            url:
                'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Eric_Clapton_01May2015.jpg/240px-Eric_Clapton_01May2015.jpg',
        },

    ]
    return (
        <>
         <Header
        containerStyle={{ backgroundColor: '#0b2242' }}
        centerComponent={{ text: 'Music Player by Natan', style: { color: '#fff' } }}
      />
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", backgroundColor: '#0b2242' }}>
                <FlatList
                    data={playlist}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <View style={{ flex: 1, flexDirection: "row" }} >
                                    <View style={{ flex: 1 }}>
                                        <Text style={style.listText}> {item.id}</Text>
                                    </View>
                                    <View style={{ flex: 1}}>
                                        <Text style={style.listText}>{item.artist} </Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={style.listText}>{item.album}</Text>
                                    </View>
                                </View>

                            </>
                        )
                    }} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    listText: {
        color: '#0b2242',
        marginTop: 5,
        backgroundColor: "#fff"
    }
})
export default Home;