import styled from 'styled-components/native';

export const CenterView = styled.View`
    align-items: center
    justify-content: center
    flex:1
    border-width:1px
`
export const FlexCenterView = styled(CenterView)`
    flex: 1
`
export const DefaultButton = styled.TouchableOpacity`
    border-width: 1px
    border-radius: 10px
    padding: 8px
`

export const ContentText = styled.Text`
    font-size: ${props => props.size}px
    color: ${props => props.color}
`