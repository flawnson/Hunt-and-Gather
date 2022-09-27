import React from "react";
import {
    HStack, Text,
    Heading, Image,
    VStack, Box,
    Flex, AspectRatio,
    Center, Stack
} from "native-base";
import { FoodCardProps } from "../../types";

type props = {
    cardData: FoodCardProps
}

export default function (props: props) {

    return (
        <Box display="flex" alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: props.cardData.imgPath
                    }} alt="image" />
                </AspectRatio>
                <HStack>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                {props.cardData.dishName}
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                {props.cardData.restaurantName}
                            </Text>
                            <Text fontSize="md" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="500">
                                {props.cardData.price}
                            </Text>
                        </Stack>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {props.cardData.location} - {props.cardData.time}
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </HStack>
            </Box>
        </Box>
    )
}
