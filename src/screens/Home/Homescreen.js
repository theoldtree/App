import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';

export default function HomeScreen({ navigation }) {

    const ButtonHandler = () => {
        navigation.navigate("Research")
    }

    return (
        <FlexCenterView>
            <ContentText size={20}>HomeScreen</ContentText>
            <DefaultButton
                onPress={ButtonHandler}
            >
                <ContentText
                    size={15}
                >
                    Do Research
                </ContentText>
            </DefaultButton>
        </FlexCenterView>
    );
}

const ContentText = styled.Text`
    font-size: ${props => props.size}
`