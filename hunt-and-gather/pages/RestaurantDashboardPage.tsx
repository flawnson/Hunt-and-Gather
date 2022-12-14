import React from "react";
import {
    Center, Heading,
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodCardDeck from "../components/templates/FoodCardDeck";
import DashboardStatCard from "../components/atoms/DashboardStatCard";

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function () {

    return (
        <SafeAreaView>
            <DashboardStatCard />
        </SafeAreaView>
    )
}
