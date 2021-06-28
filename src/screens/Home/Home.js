/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Block} from '../../components';
import {Icon} from '../../constants/media';
import {styles} from '../../styles/home.styles';
import {MyContext} from '../../context/MyContext';
import {useContext} from 'react';
import * as Mqtt from 'react-native-native-mqtt';

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
const defaultConnectOptions = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false,
  },
};
function Home({navigation}) {
  const {data, scanPeripherals, connectToSensor} = useContext(MyContext);
  React.useEffect(() => {
    const client = new Mqtt.Client('tcp://iot.sytes.net:1883');
    client.connect(
      {
        keepalive: 60,
        clientId: 'Mobile01',
        username: 'nhom2',
        password: 'nckh2021',
        cleanSession: true,
      },
      err => {
        console.log(err);
      },
    );
    // const client = Mqtt.connect('mqtt://test.mosquitto.org:1883', {

    // });
    console.log(client);
    client.on(Mqtt.Event.Message, (topic, message) => {
      console.log('Mqtt Message:', topic, message.toString());
    });

    client.on(Mqtt.Event.Connect, () => {
      console.log('MQTT Connect');
      client.subscribe(['presence'], [0]);
    });
  }, []);
  const connect = value => {
    connectToSensor(value, navigation);
  };
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
          <TouchableOpacity
            onPress={scanPeripherals}
            style={styles.btnSearchMini}>
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
                    onPress={() => connect(value)}
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
    </Block>
  );
}

export default Home;
