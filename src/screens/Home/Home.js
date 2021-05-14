/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity, Button, View, StyleSheet} from 'react-native';
import {Block} from '../../components';
import {Icon} from '../../constants/media';
import {styles} from '../../styles/home.styles';

function Home() {
  return (
    <Block>
      {/* Start Block header */}
      <View style={styles.header}>
        <Block noflex row>
          <Text style={styles.headerWelcome}>Hola,</Text>
          <Text style={styles.headerName}> Alma</Text>
        </Block>
        <Block noflex>
          <Text style={styles.headerText}>
            Te tenemos excelentes noticias para ti
          </Text>
        </Block>
      </View>
      {/* End Block header  */}

      {/* Start Block body  */}
      {/* <Block style={styles.body}>
         <TouchableOpacity style={styles.btnSearch}>
           <Icon.Search width={120} height={40} />
         </TouchableOpacity>
         <Text style={styles.bodyText}>Scan Device</Text>
     
         
       </Block> */}

      <Block>
        <Block
          noflex
          style={{
            direction: 'rtl',
            padding: 20,
          }}>
          <TouchableOpacity style={styles.btnSearchMini}>
            <Icon.Search height={20} />
          </TouchableOpacity>
        </Block>
        <Block center>
          <Block center row noflex style={styles.sensorComponent}>
            <Block row flex>
              <Icon.BioSensor style={{marginTop: 4}} width={30} height={30} />
              <Block style={{paddingLeft: 10}}>
                <Text
                  style={StyleSheet.flatten([
                    styles.sensorInfo,
                    {
                      fontWeight: 'bold',
                    },
                  ])}>
                  excelentes noticias
                </Text>
                <Text style={styles.sensorInfo}>30:AE:A4:45:63:C2</Text>
              </Block>
              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: '#374EEE',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Connect
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Block>
      {/* End Block body  */}
    </Block>
  );
}

export default Home;
