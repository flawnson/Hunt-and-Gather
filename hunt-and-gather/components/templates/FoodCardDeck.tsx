import React from "react";
import {
    FlatList, useTheme
} from "native-base";
import { RefreshControl } from 'react-native'
import FoodCard from "../organisms/FoodCard";
import { FoodCardProps } from "../../types";

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function () {

    const data: FoodCardProps[] = [
        {
            foodId: "1",
            restaurantName: "Pokemon",
            dishName: "Spicy Salmon Poke bowl",
            imgPath: "https://hips.hearstapps.com/hmg-prod/images/delish-jan-18-poke-bowl-221-1610941696.jpg",
            price: "$7.25",
            location: "300m",
            time: "25 mins left"
        },
        {
            foodId: "2",
            restaurantName: "Hoolio's hummus haus",
            dishName: "Chicken shawarma platter",
            imgPath: "https://www.fodmapformula.com/wp-content/uploads/Low-FODMAP-chicken-shawarma-plate-Facebook-Post-2.png",
            price: "$9.00",
            location: "800m",
            time: "2 hours left"
        },
        {
            foodId: "3",
            restaurantName: "Chickadee's",
            dishName: "Chicken sandwich deluxe",
            imgPath: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-211105-popeyes-chicken-sandwich-001-ab-web-1637207425.jpg",
            price: "$6.00",
            location: "500m",
            time: "10 mins left"
        },
        {
            foodId: "4",
            restaurantName: "Thairanny",
            dishName: "Pad Thai",
            imgPath: "https://images.food52.com/OKXP8nfPtgnUgH4PQvpf_PjU4tU=/2016x1344/f0917df7-8286-44ab-b437-e8d0d291e11f--2019-1119_pad-thai_3x2_rocky-luten_003.jpg",
            price: "$6.50",
            location: "600m",
            time: "25 mins left"
        },
        {
            foodId: "5",
            restaurantName: "Don't forget the donuts",
            dishName: "Half-dozen donuts",
            imgPath: "https://media.blogto.com/articles/rankedlistings/2022/04/28/machino-cafe-toronto-bf3c17bc.jpg?w=720&cmd=resize_then_crop&height=480&quality=70",
            price: "$5.00",
            location: "400m",
            time: "1 hour left"
        },
    ]

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <FlatList refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        } data={data} renderItem={({ item }) => (<FoodCard cardData={item} />)} keyExtractor={item => item.foodId}
        />
    )
}
