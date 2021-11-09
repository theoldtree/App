import React from 'react';
import { Text,View,Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';

export default function ResearchScreen({navigation}){

    const ButtonHandler = () => {
        navigation.navigate("Home")
    }

    return(
        <FlexCenterView>
            <Text>ResearchScreen</Text>
            <DefaultButton
                onPress = {ButtonHandler}
            >
                <Text>
                    Back to Home
                </Text>
            </DefaultButton>
        </FlexCenterView>
        );
}

