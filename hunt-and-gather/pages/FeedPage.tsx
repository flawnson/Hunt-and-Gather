import React from "react";
import {
    Center, Heading,
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodCardDeck from "../components/templates/FoodCardDeck";

export default function () {

    return (
        // Must have flex to be scrollable
        <SafeAreaView style={{flex: 1}}>
            <FoodCardDeck />
        </SafeAreaView>
    )
}
