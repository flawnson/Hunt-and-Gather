import React from "react";
import {
    Center, Heading,
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodCardDeck from "../components/templates/FoodCardDeck";

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function () {

    return (
        <SafeAreaView>
            <Center>
                <FoodCardDeck />
            </Center>
        </SafeAreaView>
    )
}
