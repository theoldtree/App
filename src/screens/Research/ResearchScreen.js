import React from 'react';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';
import ImageColors from 'react-native-image-colors';

export default function ResearchScreen({ navigation }) {

    const ButtonHandler = () => {
        navigation.navigate("Home");
    }

    const uri = require('../../images/cat.png');
    

    const ResearchButtonHandler = () => {

    }

    return (
        <FlexCenterView>
            <ContentText size={20}>ResearchScreen</ContentText>
            <Img
                source={require('../../images/cat.png')}
            />
            <DefaultButton
                onPress={ResearchButtonHandler}
            >
                <ContentText
                    size={15}
                >
                    Research
                </ContentText>
            </DefaultButton>
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
    font-size: ${props => props.size};
`

const Img = styled.Image`
    width: 150px;
    height: 200px;
`
