/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, TouchableOpacity, Button, View, StyleSheet,Image,ScrollView,Dimensions} from 'react-native';
 import {Block} from '../../components';
 import {Icon} from '../../constants/media';
 import {styles} from '../../styles/home.styles';
 function WALK() {
     let screenwith=Dimensions.get('window').width;
     let screenheight=Dimensions.get('window').height;
    return (
        
        <ScrollView horizontal={true} pagingEnabled={true}>
        
            <View width={screenwith} height={screenheight} style={{flex:1}}>
        <Block>
            
      <Block
      
      style={{marginTop:200,marginLeft:150}}
      >
        
        <Image style={{height:100,width:100}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}></Image>
        
      </Block>
   
         <Text style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:170,marginBottom:40}}>Purify</Text>
         </Block>
         <Block >
           <Block>
         <Text  style={{color:"gray",fontSize:12,fontWeight:"bold",textAlign:"center",marginLeft:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     
      </Block>
      <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  borderRadius: 4,
                  marginBottom:150,
                  marginLeft:50,
                  height:50
              
                }}>
                <Text
                  style={{
                    fontSize:20,
                    fontWeight:"bold",
                    color: '#fff',
                  }}>
                  Let's Go
                </Text>
              </TouchableOpacity>
      
      </Block>
      </View>
      <View width={screenwith} height={screenheight} style={{flex:1}}>
        <Block>
            
      <Block
      
      style={{marginTop:200,marginLeft:150}}
      >
        
        <Image style={{height:100,width:100}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}></Image>
        
      </Block>
   
         <Text style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:170,marginBottom:40}}>Purify</Text>
         </Block>
         <Block >
           <Block>
         <Text  style={{color:"gray",fontSize:12,fontWeight:"bold",textAlign:"center",marginLeft:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     
      </Block>
      <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  borderRadius: 4,
                  marginBottom:150,
                  marginLeft:50,
                  height:50
              
                }}>
                <Text
                  style={{
                    fontSize:20,
                    fontWeight:"bold",
                    color: '#fff',
                  }}>
                  Let's Go
                </Text>
              </TouchableOpacity>
      
      </Block>
      </View>
      <View width={screenwith} height={screenheight} style={{flex:1}}>
        <Block>
            
      <Block
      
      style={{marginTop:200,marginLeft:150}}
      >
        
        <Image style={{height:100,width:100}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}></Image>
        
      </Block>
   
         <Text style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:170,marginBottom:40}}>Purify</Text>
         </Block>
         <Block >
           <Block>
         <Text  style={{color:"gray",fontSize:12,fontWeight:"bold",textAlign:"center",marginLeft:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     
      </Block>
      <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  borderRadius: 4,
                  marginBottom:150,
                  marginLeft:50,
                  height:50
              
                }}>
                <Text
                  style={{
                    fontSize:20,
                    fontWeight:"bold",
                    color: '#fff',
                  }}>
                  Let's Go
                </Text>
              </TouchableOpacity>
      
      </Block>
      </View>
      </ScrollView>
    );
  }
 
 export default WALK;
 