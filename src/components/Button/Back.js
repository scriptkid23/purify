import React, { Component } from "react";
import { StyleSheet,  View,  Text ,TouchableOpacity,Dimensions} from 'react-native';
import Image from '../../constant/image'
import {StoreContext} from '../../utils/store'
const {width,height} = Dimensions.get('window');
export default function Button(props){
    let {camera} = React.useContext(StoreContext);
    const handleBack = () => {
        switch (props.type) {
            case 'BACK_TO_CAMERA':
                props.back();
                break;
            case 'BACK_TO_HOME':
                props.back();
                camera.dispatch({type:"SET_DEFAULT"})
                break;
            default:
                break;
        }
    }
    return(
        <TouchableOpacity onPress = {() => handleBack()}>
            <View style={styles.wrapperButton}> 
                <Image.svg.back 
                    width={ width * 5 / 32 * 2 / 5} 
                    height={ width * 5 / 32 * 2 / 5}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   wrapperButton : {
       backgroundColor : "#FF971D",
       alignItems : "center",
       justifyContent : "center",
       width : width * 5 / 32,
       height : width * 5 / 32,
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

