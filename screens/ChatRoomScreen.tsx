import React from 'react';
import { ImageBackground, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatsData from '../data/Chats';
import BG from '../assets/images/test.png';
import ChatMessage from '../components/ChatMessage/ChatMessage';
import InputBox from '../components/InputBox/InputBox';

const ChatRoomScreen = () => {
    const route = useRoute();
    // console.log('route.params: ', route.params)
    // console.log(props)
    return (
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={BG}
        >
            <FlatList
                data={chatsData.messages}
                renderItem={({ item }) => <ChatMessage interlocutor={route.params} message={item} />}
                inverted
            />
            <InputBox/>
        </ImageBackground>

    )
}

export default ChatRoomScreen;
