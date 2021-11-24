import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton, ContentText } from '../../components/Styles/styles';

export default function HomeScreen({ navigation }) {

    const ResearchButtonHandler = () => {
        navigation.navigate("Research")
    }

    const CameraButtonHandler = () => {
        navigation.navigate("Camera")
    }

    return (
        <FlexCenterView>
            <ContentText size={20}>HomeScreen</ContentText>
            <DefaultButton
                onPress={ResearchButtonHandler}
            >
                <ContentText
                    size={15}
                >
                    Do Research
                </ContentText>
            </DefaultButton>
            <DefaultButton
                onPress={CameraButtonHandler}
            >
                <ContentText
                    size={30}
                    color="#987654"
                >
                    Camera
                </ContentText>
            </DefaultButton>
        </FlexCenterView>
    );
}
