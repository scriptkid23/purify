/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, TouchableOpacity, Button, View, StyleSheet,TextInput,Dimensions} from 'react-native';
 import {Block} from '../../components';
 import {Icon} from '../../constants/media';
 import {styles} from '../../styles/home.styles';
 
 function Register() {
   return (
     <Block>
     
       <View style={styles.headerLogin}>
         <Block noflex row>
           <Text style={styles.headerLoginWelcome}>Create account</Text>
           
         </Block>
 
         <Block noflex>
         <Text style={styles.headertextlogin}> Sign up to get started!</Text>
          
         </Block>
         <Block
           noflex
           style={{
             direction: 'rtl',
           
             paddingTop:70,
           }}>
             <TextInput placeholderTextColor="#94A1FF" placeholder="     Enter your full name"  style={styles.InputTexxt}></TextInput>
             
           </Block>
           <Block
           noflex
           style={{
             direction: 'rtl',
           
             paddingTop:20,
           }}>
             <TextInput placeholderTextColor="#94A1FF" placeholder="     Enter your email"   style={styles.InputTexxt}></TextInput>
           </Block>
          
           <Block
           noflex
           style={{
             direction: 'rtl',
           
             paddingTop:20,
           }}>
             <TextInput placeholderTextColor="#94A1FF" placeholder="     Enter your password"   style={styles.InputTexxt}></TextInput>
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
                   Register
                 </Text>
               </TouchableOpacity>
           </Block>
           <Block
           noflex
           style={{
             direction: 'rtl',
           
             paddingTop:30,
             paddingLeft:70
           }}>
           <Text numberOfLines={1} style={{color: 'darkblue',fontSize:15,fontWeight:'bold'}}
       onPress={() => Linking.openURL('http://google.com')}>
   I'm ready a member, Sign In
 </Text>
 </Block>
           
       </View>
 
      
       
     </Block>
   );
 }
 
 export default Register;
 