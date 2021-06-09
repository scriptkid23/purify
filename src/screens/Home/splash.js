/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, TouchableOpacity, Button, View, StyleSheet,Image} from 'react-native';
 import {Block} from '../../components';
 import {Icon} from '../../constants/media';
 import {styles} from '../../styles/home.styles';
 function Splash() {
    return (
        <Block>
            
      <Block
      
      style={{paddingTop:200,paddingLeft:150}}
      >
        
        <Image style={{height:100,width:100}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}></Image>
         <Text style={{color:"#152383",fontSize:25,fontWeight:"bold",paddingLeft:20,paddingTop:10}}>Purify</Text>
         
      </Block>
      <Text style={{color:"gray",fontSize:12,fontWeight:"bold",paddingBottom:370,paddingLeft:115}}>Together protect the environment</Text>

      </Block>
      
    );
  }
 
 export default Splash;
 