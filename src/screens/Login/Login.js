/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity, Button, View, StyleSheet,TextInput} from 'react-native';
import {Block} from '../../components';
import {Icon} from '../../constants/media';
import {styles} from '../../styles/home.styles';

function Login() {
  return (
    <Block>
    
      <View style={styles.headerLogin}>
        <Block noflex row>
          <Text style={styles.headerLoginWelcome}>Wellcome</Text>
          
        </Block>

        <Block noflex>
        <Text style={styles.headertextlogin}> Sign in to continue !</Text>
         
        </Block>
        <Block
          noflex
          style={{
            direction: 'rtl',
          
            paddingTop:70,
          }}>
            <TextInput placeholderTextColor="gray" placeholder="     Enter your gmail"  style={styles.InputTexxt}></TextInput>
            
          </Block>
          <Block
          noflex
          style={{
            direction: 'rtl',
          
            paddingTop:20,
          }}>
            <TextInput placeholderTextColor="gray" placeholder="     Enter your password"   style={styles.InputTexxt}></TextInput>
          </Block>
          <Block
          noflex
          style={{
            direction: 'rtl',
          
            paddingTop:10,
            paddingLeft:160
          }}>
          <Text numberOfLines={1} style={{color: 'darkblue',fontSize:15,fontWeight:'bold'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Fogot password ?
</Text>
</Block>
          <Block
          noflex
          style={{
            direction: 'rtl',
          
            paddingTop:60,
          }}>
            
         <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  borderRadius: 24,
                  height:60,
                  borderRadius:15
                }}>
                <Text
                  style={{
                    fontSize:24,
                    color: '#fff',
                    fontWeight:"bold",
                    
                  
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
          </Block>
          <Block
          noflex
          style={{
            direction: 'rtl',
          
            paddingTop:90,
            paddingLeft:90
          }}>
          <Text numberOfLines={1} style={{color: 'darkblue',fontSize:15,fontWeight:'bold'}}
      onPress={() => Linking.openURL('http://google.com')}>
  I'm new user,Sign up 
</Text>
</Block>
          
      </View>

     
      
    </Block>
  );
}

export default Login;
