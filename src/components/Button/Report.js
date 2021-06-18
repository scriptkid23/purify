import React, { Component } from "react";
import { StyleSheet,  View,  Text ,TouchableOpacity} from 'react-native';
import Image from '../../constant/image'
export default function Button(){
    return(
        <TouchableOpacity>
            <View style={styles.wrapperButton}> 
                <Image.svg.feedback width={25} height={25}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   wrapperButton : {
       backgroundColor : "#CB3737",
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
        shadowOpacity: 0.4,
        shadowRadius: 2.62,

        elevation: 6,
   }

  });

