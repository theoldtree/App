import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';
import ImageColors from 'react-native-image-colors';

export default function ResultScreen({ navigation }) {

    const uri = require('./cat.png')

    const result = await ImageColors.getColors(uri, {
        fallback: '#228B22',
        cache: true,
        key: 'unique_key',
    })

    switch (result.platform) {
        case 'android':
            // android result properties
            const vibrantColor = result.vibrant
            break
        case 'web':
            // web result properties
            const lightVibrantColor = result.lightVibrant
            break
        case 'ios':
            // iOS result properties
            const primaryColor = result.primary
            break
        default:
            throw new Error('Unexpected platform key')
    }

    return (
        <FlexCenterView>
            <ContentText size={20}>ResultScreen</ContentText>
            <ContentText size={20}>{result}</ContentText>
        </FlexCenterView>
    );
}

const ContentText = styled.Text`
    font-size: ${props => props.size}
`