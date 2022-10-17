
import React, {useContext} from 'react';
import {HStack, Box, Tooltip, Divider, Text, Pressable} from 'native-base';
import { StyleSheet } from "react-native";


export default function () {

    return (
        <Tooltip
            isDisabled={false}
            label={"None"}
            openDelay={1000}
        >
            <Pressable
                onPress={() => {}}
            >
                <Box
                    rounded="lg"
                    borderRadius="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                    }}
                    _web={{
                        shadow: "2",
                        borderWidth: "0",
                    }}
                    _light={{
                        backgroundColor: true ? "primary.50" : "gray.50",
                    }}
                    style={styles.card}
                >
                    <HStack style={styles.container}>
                        <Text variant="darkModeButton" style={styles.statPrefix}>
                            {}
                        </Text>
                        <Text style={styles.statText}>
                            {}
                        </Text>
                        <Text style={styles.statSuffix}>
                            {}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Tooltip>
    );
}


const styles = StyleSheet.create({
    card: {
        cursor: 'pointer',
        width: 120,
        height: 50
    },
    container: {
        margin: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flexDirection: 'row'
    },
    statPrefix: {
        flex: 1,
        fontSize: 10,
        alignSelf: 'center'
    },
    statText: {
        fontSize: 20,

    },
    statSuffix: {
        fontSize: 10,
    },
})
