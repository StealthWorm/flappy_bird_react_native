import React from 'react';
import { View, ImageBackground } from 'react-native';
import pipe from '../assets/pipe.png'

const Obstacles = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBottom,
    gap,
    obstaclesLeft }) => {

    return (
        <>
            <ImageBackground source={pipe} resizeMode="stretch" style={{
                position: 'absolute',
                // backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight - randomBottom,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
                transform: 'rotate(180deg)'
            }}/>
            <ImageBackground source={pipe} resizeMode="stretch" style={{
                position: 'absolute',
                // backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}/>
        </>
    )
}

export default Obstacles