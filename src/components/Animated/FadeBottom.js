import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeBottom(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
 
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: props.duration,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
     style={{
      opacity: fadeAnim, // Binds directly
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [150,0]  // 0 : 150, 0.5 : 75, 1 : 0
        }),
      }],
    }}
    >
      {props.children}
    </Animated.View>
  );
}