import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native'
import {Text, Button, Image, Center, Heading} from 'native-base'
import {useNavigation, useRoute} from "@react-navigation/native";
import { SafeAreaView } from 'react-native';


export default function() {

    return (
        <SafeAreaView style={{flex: 1}}>
            <Center style={styles.container}>
                <Heading>
                    {}
                </Heading>
                <Text style={styles.message}>
                    {}
                </Text>
                <Image
                    style={styles.QRcode}
                    source={{uri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${"It works!"}`}}
                    alt={"QRCode"}
                />
                <Text fontSize="3xl" style={styles.subText}>
                    {}
                </Text>
                <Text style={styles.subText}>
                    Click here to copy the join code to Clipboard
                </Text>
                <Button onPress={() => {}}>
                    Cancel
                </Button>
            </Center>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    message: {
        fontSze: 32,
        margin: 20
    },
    QRcode: {
        width: 300,
        height: 300,
    },
    subText: {
        textAlign: "center",
        margin: 20
    },
})
