import React, { Component } from "react";
import { StyleSheet,  View,  Text ,TouchableOpacity} from 'react-native';
import Image from '../../constant/image'
export default function Button(props){
    const handleAction = () => {
        switch (props.type) {
            case 'CAPTURE':
                props.snap();
                break;
            case 'GO_TO_CAMERA':
                props.action();
            default:
                break;
        }
    }
    return(
        <TouchableOpacity onPress={() => handleAction()}>
            <View style={styles.wrapperButton}> 
                <Image.svg.camera width={30} height={30}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   wrapperButton : {
       backgroundColor : "#0033FF",
       alignItems : "center",
       justifyContent : "center",
       width : 60,
       height : 60,
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

