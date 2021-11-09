import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';

export default function ResearchScreen({ navigation }) {

    const ButtonHandler = () => {
        navigation.navigate("Home")
    }

    return (
        <FlexCenterView>
            <ContentText size={20}>ResearchScreen</ContentText>
            <DefaultButton
                onPress={ButtonHandler}
            >
                <ContentText
                    size={15}
                >
                    Back to Home
                </ContentText>
            </DefaultButton>
        </FlexCenterView>
    );
}

const ContentText = styled.Text`
    font-size: ${props => props.size}
`
