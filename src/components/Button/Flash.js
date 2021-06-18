import React, { Component } from "react";
import { StyleSheet,  View,  Text ,TouchableOpacity,Dimensions} from 'react-native';
import Image from '../../constant/image'
import styled from 'styled-components'
const {width,height} = Dimensions.get('window');
export default function Button({turnOn,turnOff}){
    const [flash,setFlash] = React.useState(false);
    const handleFlash = () => {
        if(!flash){
            setFlash(true);
            turnOn();
        }
        else{
            setFlash(false);
            turnOff();
        }
    }
    return(
        <TouchableOpacity onPress={() => handleFlash()}>
            <WrapperButton flash={flash} style={styles.wrapperButton}>
                <Image.svg.flash 
                    width={ width * 10 / 32 * 2 / 5} 
                    height={ width * 10 / 32 * 2 / 5}        
                    />  
            </WrapperButton>      
                   
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   wrapperButton : {
       borderWidth: 4,
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
const WrapperButton = styled.View`
    ${props => !props.flash ? 
        `border-color :#FD5E53 ` : 
        `background-color:#FD5E53;
        border-color : #FD5E53;
        `}
`

