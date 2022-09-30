import React, { useEffect, useState } from 'react'
import { Button, Tooltip,
    FormControl, Input,
    Slider, Stack,
    Text, VStack,
    HStack, Select,
    Box } from 'native-base'
import { AntDesign } from '@expo/vector-icons';

type DefaultCreateQueueFormData = {
    name: string,
    capacity: number,
    gracePeriod: number,
    maxPartySize: number,
    offlineTime: number,
    address: string,
    password: string,
}

type DefaultErrors = {
    name?: string
}

export default function () {
    const [submitted, setSubmitted] = useState(false)
    const defaultData = {name: "Sample Queue name",
        capacity: 10,
        gracePeriod: 0,
        maxPartySize: 1,
        offlineTime: 3,
        address: "Sample address",
        password: "123456789"}
    const [formData, setData] = useState<DefaultCreateQueueFormData>(defaultData);
    const [errors, setError] = useState<DefaultErrors>({});
    const [onChangeValue, setOnChangeValue] = useState(500)
    const [onChangeEndValue, setOnChangeEndValue] = useState(500)
    const [show, setShow] = React.useState(false);

    const handleClick = () => setShow(!show);

    // Be careful with this it might trigger infinite render loop
    useEffect(() => {validate()}, [formData])

    const validate = () => {
        if (formData.name.length > 50) {
            setError({
                ...errors,
                name: 'Name is too long',
            });
            return false;
        } else if (formData.name === undefined) {
            setError({
                ...errors,
                name: 'Name is required',
            });
            return false;
        }
        return true;
    }

    return (
        <VStack space={3} width="90%" mx="3">
            <FormControl isRequired isInvalid={"name" in errors}>
                <Stack>
                    <HStack>
                        <FormControl.Label _text={{bold: true}}>{"Some Form Label"}</FormControl.Label>
                        <Tooltip label={"Some label"} openDelay={300}>
                            <Box>
                                <AntDesign name={"questioncircleo"} size={10}/>
                            </Box>
                        </Tooltip>
                    </HStack>
                    <Input
                        placeholder={"Some Form Placeholder"}
                        onChangeText={(value) => setData({ ...formData, name: value })}
                    />
                    <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{"Name Error"}</FormControl.ErrorMessage>
                </Stack>
            </FormControl>
            <FormControl>
                <Stack>
                    <HStack>
                        <FormControl.Label _text={{bold: true}}>{"Some Form Label"}</FormControl.Label>
                        <Tooltip label={"Some Label"} openDelay={300}>
                            <Box>
                                <AntDesign name={"questioncircleo"} size={10}/>
                            </Box>
                        </Tooltip>
                    </HStack>
                    <Text>{onChangeValue}</Text>
                    <Slider
                        defaultValue={500}
                        onChange={(v) => {
                            setOnChangeValue(Math.floor(v))
                        }}
                        onChangeEnd={(v) => {
                            v && setOnChangeEndValue(Math.floor(v))
                            setData({...formData, capacity: v})
                        }}
                        minValue={0}
                        maxValue={1000}
                    >
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                    <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>{"Queue cap error"}</FormControl.ErrorMessage>
                </Stack>
            </FormControl>
            <Button.Group space={2}>
                <Button
                    mt="5"
                    variant="ghost"
                    onPress={() => {
                    }}
                >
                    {"Cancel"}
                </Button>
                <Button
                    onPress={() => {}}
                    mt="5"
                    isLoading={submitted}
                    isLoadingText={"Submitting"}
                >
                    {"Submit"}
                </Button>
            </Button.Group>
        </VStack>
    )
}
