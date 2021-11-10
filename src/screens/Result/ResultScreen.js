import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';
import ImageColors from 'react-native-image-colors';

export default function ResultScreen({ navigation }) {

    return (
        <FlexCenterView>
            <ContentText size={20}>ResultScreen</ContentText>
        </FlexCenterView>
    );
}

const ContentText = styled.Text`
    font-size: ${props => props.size}
`