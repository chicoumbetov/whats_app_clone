import React from 'react';
import { View, Text } from 'react-native';
import {Message} from '../../types';
import moment from "moment";
import styles from './style';

export type ChatMessageProps = {
    interlocutor: {
        id: string;
        name: string;
    }
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message, interlocutor } = props;
    console.log('message', message)
    console.log('interlocutor', interlocutor)

    const isMyMessage = () => {
        if (message.user.id === 'u1') {
            return false
        } else {
            return interlocutor.name
        }
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: (message.user.id === 'u1') ? '#DCFBC5' : 'white',
                    marginLeft: (message.user.id === 'u1') ? 40 : 0,
                    marginRight: (message.user.id === 'u1') ? 0 : 40,
                }
            ]}>
                {/* if it is me( isMyId) then do not display name*/}
                {isMyMessage() && <Text style={styles.name}>{interlocutor.name}</Text>}

                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>
                    {moment(message.createdAt).fromNow()};
            </Text>
            </View>

        </View>

    )
}

export default ChatMessage;
