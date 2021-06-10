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
        
            <View width={screenwith} height={screenheight} style={{flex:1,backgroundColor:'#fff'}}>
      
            
      <View
      
      style={{marginTop:screenheight*1/8,marginLeft:screenwith*1/2-135}}
      >
        
        <Image style={{height:265,width:247}} source={require('../Image/walk.png')}></Image>
        
      </View>
   
         <Text numberOfLines={1} style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:screenwith*1/2-120+20,marginTop:50}}>Cuida tu economia</Text>
      
        

     <View style={{}}>
         <Text numberOfLines={3}  style={{color:"#132767",fontSize:13,textAlign:"center",marginLeft:screenwith*1/8+20,width:300,marginTop:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     </View>
     <View style={{flexDirection:'row'}}>

<Text  style={{color:"#374EEE",fontSize:13,textAlign:"center",marginLeft:screenwith*4/10+10,marginTop:20,fontSize:20}}>●</Text>
<Text  style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>
<Text   style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>



</View>
    
      
     
      </View>
      <View width={screenwith} height={screenheight} style={{flex:1,backgroundColor:'#fff'}}>
      
            
      <View
      
      style={{marginTop:screenheight*1/8,marginLeft:screenwith*1/2-135}}
      >
        
        <Image style={{height:265,width:247}} source={require('../Image/walk.png')}></Image>
        
      </View>
   
         <Text numberOfLines={1} style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:screenwith*1/2-120+20,marginTop:50}}>Cuida tu economia</Text>
      
        

     <View style={{}}>
         <Text numberOfLines={3}  style={{color:"#132767",fontSize:13,textAlign:"center",marginLeft:screenwith*1/8+20,width:300,marginTop:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     </View>
     <View style={{flexDirection:'row'}}>

<Text  style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:screenwith*4/10+10,marginTop:20,fontSize:20}}>●</Text>
<Text  style={{color:"#374EEE",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>
<Text   style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>



</View>
      
      
     
      </View>
      <View width={screenwith} height={screenheight} style={{flex:1,backgroundColor:'#fff'}}>
      
            
      <View
      
      style={{marginTop:screenheight*1/8,marginLeft:screenwith*1/2-135}}
      >
        
        <Image style={{height:265,width:247}} source={require('../Image/walk.png')}></Image>
        
      </View>
   
         <Text numberOfLines={1} style={{color:"#152383",fontSize:25,fontWeight:"bold",marginLeft:screenwith*1/2-120+20,marginTop:50}}>Cuida tu economia</Text>
      
        

     <View style={{}}>
         <Text numberOfLines={3}  style={{color:"#132767",fontSize:13,textAlign:"center",marginLeft:screenwith*1/8+20,width:300,marginTop:20}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
     </View>
     <View style={{flexDirection:'row'}}>

<Text  style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:screenwith*4/10+10,marginTop:20,fontSize:20}}>●</Text>
<Text  style={{color:"#ECECEC",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>
<Text   style={{color:"#374EEE",fontSize:13,textAlign:"center",marginLeft:10,marginTop:20,fontSize:20}}>●</Text>



</View>
      <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 300,
                  borderRadius: 4,
                  marginTop:70,
              
                  marginLeft:screenwith*1/7,
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
      
     
      </View>
      
     
      </ScrollView>
    );
  }
 
 export default WALK;
 