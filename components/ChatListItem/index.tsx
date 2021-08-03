import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import moment from 'moment'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const navigation = useNavigation();
    const user = chatRoom.users[1];

    const onClick = () => {
        //this is how we send to open specific user
        navigation.navigate('ChatRoomScreen', {
            id: chatRoom.id,
            name: user.name,
        });
        //console.warn( `Clicked on ${user.name}`)
    }

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => onClick()}
        >
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>

                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).fromNow()};
                </Text>

        </TouchableOpacity>
    )
}

export default ChatListItem;
