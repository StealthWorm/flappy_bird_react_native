import React from 'react';
import { View, ImageBackground } from 'react-native';
import bird from '../assets/bird.png'

const Bird = ({ birdBottom, birdLeft, degree }) => {
    const birdWidth = 50
    const birdHeight = 60

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2),
        }}>
            <ImageBackground source={bird} resizeMode="contain" style={{
                height: birdHeight,
                width: birdWidth,
                transform: `rotate(${degree}deg)`,
            }}/>
        </View>
    )
}

export default Bird