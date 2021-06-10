/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, TouchableOpacity, Button, View, StyleSheet,Image,Dimensions} from 'react-native';
 import {Block} from '../../components';
 import {Icon} from '../../constants/media';
 import {styles} from '../../styles/home.styles';
 function Splash() {
  let screenwith=Dimensions.get('window').width;
  let screenheight=Dimensions.get('window').height;
    return (
      
            
      <Block
      
      style={{paddingTop:screenheight*1/3,paddingLeft:screenwith*1/2-80}}
      >
        
        <Image style={{height:160,width:190}} source={require('../Image/splash.png')}></Image>
        
     

      </Block>
      
    );
  }
 
 export default Splash;
 