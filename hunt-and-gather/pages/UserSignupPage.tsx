import React from "react";
import { Pressable, Keyboard } from "react-native";
import {
    HStack, VStack,
    Center, Heading,
    Box, FormControl,
    Button, Input,
    Link, Text
} from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function () {
    return (
        <Pressable onPress={Keyboard.dismiss}>
            <SafeAreaView>
                <Center w="100%">
                    <Box safeArea p="2" w="90%" maxW="290" py="8">
                        <Heading size="lg" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }} fontWeight="semibold">
                            Welcome
                        </Heading>
                        <Heading mt="1" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="medium" size="xs">
                            Sign up to continue!
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>First Name</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Last Name</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Password</FormControl.Label>
                                <Input type="password" />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>Confirm Password</FormControl.Label>
                                <Input type="password" />
                            </FormControl>
                            <Button mt="2" colorScheme="indigo">
                                Sign up
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    I have an account{" "}
                                </Text>
                                <Link _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} href="#">
                                    Log in
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </SafeAreaView>
        </Pressable>
    )
};
