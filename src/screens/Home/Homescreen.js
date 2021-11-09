import React from 'react';
import { Text,View,Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton} from '../../components/Styles/styles';

export default function HomeScreen({navigation}){

    const ButtonHandler = () => {
        navigation.navigate("Research")
    }

    return(
        <FlexCenterView>
            <Text>HomeScreen</Text>
            <DefaultButton
                onPress = {ButtonHandler}
            >
                <Text>
                    Do Research
                </Text>
            </DefaultButton>
        </FlexCenterView>
        );
}

const CenterView = styled.View`
    flex: 1
    justify-content: center
    align-items: center
    border-width: 1px
`