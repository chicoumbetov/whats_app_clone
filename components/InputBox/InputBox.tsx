import {
    Entypo, FontAwesome5, Fontisto,
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons';
import React, { useState } from 'react';

import {View, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('')

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        // send the message to the backend

        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>

            <View style={styles.mainContainer} >
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo
                    name="attachment"
                    size={24} colors="grey"
                    color="grey"
                    style={styles.icon}
                />
                {/*     If message is null then show camera,
                        if it's not null then display send button
                */}
                {!message &&
                    <Fontisto
                        name="camera"
                        size={24} colors="grey"
                        style={styles.icon}
                    />
                }

            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {/*     If message is null then show micro,
                        if it's not null then display send button
                */}
                    {!message
                        ? <MaterialCommunityIcons
                            name="microphone"
                            size={24}
                            color="white"
                        />
                        : <MaterialIcons
                            name="send"
                            size={24}
                            color="white"
                        />
                    }

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;
