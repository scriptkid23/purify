import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function FadeTop(props){
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const _start = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: props.duration,
        useNativeDriver : true
      }
    ).start();
  }
  React.useEffect(() => {
    _start()
  }, [fadeAnim])
  if(props.trigger) _start();
  return (
    <Animated.View                
     style={{
      opacity: fadeAnim, 
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-150,0]  
        }),
      }],
    }}
    >
      {props.children}
    </Animated.View>
  );
}