// import React from 'react';
// import { Text, View, Button } from 'react-native';
// import { FlexCenterView, DefaultButton } from '../../components/Styles/styles';

// export default function CameraScreen({ navigation }) {

//     const ButtonHandler = () => {
//     }

//     return (
//         <FlexCenterView>
//             <ContentText size={20}>CameraScreen</ContentText>
//             <DefaultButton
//                 onPress={ButtonHandler}
//             >
//                 <ContentText
//                     size={15}
//                 >
//                     Take Photo
//                 </ContentText>
//             </DefaultButton>
//         </FlexCenterView>
//     );
// }

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { CenterView, ContentText } from '../../components/Styles/styles';

export default function CameraScreen() {
    let camera: Camera;
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const snap = async () => {
        if (!camera) {
            const options = { quality: 1, base64: true };
            const data = await camera.takePictureAsync(options);
            console.log(data);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                ref={
                    ref => {
                        camera = ref;
                    }}>
            </Camera>
            <BottomButtonContainer>
                    <CenterView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <ContentText
                                size={20}
                                color="blue"
                            >
                                Flip
                            </ContentText>
                        </TouchableOpacity>
                    </CenterView>
                    <CenterView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => snap()}>
                            <ContentText
                                size={20}
                                color="blue"
                            >
                                snap
                            </ContentText>
                        </TouchableOpacity>
                    </CenterView>
            </BottomButtonContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 0.1,
    },
    camera: {
        flex: 0.9,
    },
    button: {
        flex: 0.1,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

const BottomButtonContainer = styled(CenterView)`
    flex: 0.1;
    flex-direction: row;
    margin: 20px;
  `

