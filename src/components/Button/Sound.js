import React, { Component } from "react";
import { StyleSheet,  View,  Text ,TouchableOpacity} from 'react-native';
import Image from '../../constant/image'
import * as Speech from 'expo-speech';
export default (props) => {
    const speaker = (text) => {
        Speech.speak(text)
    }
    return(
        <TouchableOpacity onPress={() => speaker(props.text)}>
            <View style={styles.wrapperButton}> 
                <Image.svg.speaker width={30} height={30}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   wrapperButton : {
       margin : 10,
       backgroundColor : "#ffffff",
       alignItems : "center",
       justifyContent : "center",
       width : 50,
       height : 50,
       padding : 15,
       borderRadius : 50,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginLeft : 20,
        marginRight : 20,
        shadowOpacity: 0.4,
        shadowRadius: 2.62,

        elevation: 6,
   }

  });

