/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  Button,
  View,
  StyleSheet
} from 'react-native';
import {Block} from '../../components';
import {Icon} from '../../constants/media';
import {styles} from '../../styles/home.styles';
import {MyContext} from '../../context/MyContext'
import { useContext } from 'react/cjs/react.development';


function Home() {
  const {data,scanPeripherals, connectToSensor} = useContext(MyContext);
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

      <Block>
        <Block noflex style={{direction: 'rtl', padding: 20}}>
          <TouchableOpacity onPress={scanPeripherals} style={styles.btnSearchMini}>
            <Icon.Search height={20} />
          </TouchableOpacity>
        </Block>
        {/* sensor component  */}
        {data.list.map((value, index) => {
          return (
            <Block center key={index}>
              <Block center row noflex style={styles.sensorComponent}>
                <Block row flex>
                  <Icon.BioSensor
                    style={{marginTop: 4}}
                    width={30}
                    height={30}
                  />
                  <Block style={{paddingLeft: 10}}>
                    <Text
                      style={StyleSheet.flatten([
                        styles.sensorInfo,
                        {
                          fontWeight: 'bold',
                        },
                      ])}>
                      {value.name}
                    </Text>
                    <Text style={styles.sensorInfo}>{value.id}</Text>
                  </Block>
                  <TouchableOpacity
                    onPress={connectToSensor}
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#374EEE',
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
          );
        })}
      </Block>
      {/* End Block body  */}
    </Block>
  );
}

export default Home;
