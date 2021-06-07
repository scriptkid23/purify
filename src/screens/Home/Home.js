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
  StyleSheet,
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Block} from '../../components';
import {Icon} from '../../constants/media';
import {styles} from '../../styles/home.styles';

import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

function Home() {
  const [isScanning, setIsScanning] = React.useState(false);
  const peripherals = new Map();
  const [list, setList] = React.useState([]);
  // const [data, setData] = React.useState('');

  const startScan = async () => {
    console.log('waiting...');
    try {
      const results = await BleManager.scan([], 5, true);
    } catch (error) {
      console.log(error);
    }
  };
  const connectToSensor = () => {
    console.log(list);
  };

  const handleStopScan = () => {
    console.log('Scan is stopped');
    setIsScanning(false);
  };

  const handleDisconnectedPeripheral = data => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setList(Array.from(peripherals.values()));
    }
    console.log('Disconnected from ' + data.peripheral);
  };

  const handleUpdateValueForCharacteristic = data => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };

  const retrieveConnected = () => {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
      }
    });
  };

  const handleDiscoverPeripheral = peripheral => {
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    setList(Array.from(peripherals.values()));
  };

  const testPeripheral = peripheral => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              setList(Array.from(peripherals.values()));
            }
            console.log('Connected to ' + peripheral.id);

            setTimeout(() => {
              /* Test read current RSSI value */
              BleManager.retrieveServices(peripheral.id).then(
                peripheralData => {
                  console.log('Retrieved peripheral services', peripheralData);

                  BleManager.readRSSI(peripheral.id).then(rssi => {
                    console.log('Retrieved actual RSSI value', rssi);
                    let p = peripherals.get(peripheral.id);
                    if (p) {
                      p.rssi = rssi;
                      peripherals.set(peripheral.id, p);
                      setList(Array.from(peripherals.values()));
                    }
                  });
                },
              );
            }, 900);
          })
          .catch(error => {
            console.log('Connection error', error);
          });
      }
    }
  };
  React.useEffect(() => {
    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      handleUpdateValueForCharacteristic,
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }

    return () => {
      console.log('unmount');
      bleManagerEmitter.removeEventListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      );
      bleManagerEmitter.removeEventListener(
        'BleManagerStopScan',
        handleStopScan,
      );
      bleManagerEmitter.removeEventListener(
        'BleManagerDisconnectPeripheral',
        handleDisconnectedPeripheral,
      );
      bleManagerEmitter.removeEventListener(
        'BleManagerDidUpdateValueForCharacteristic',
        handleUpdateValueForCharacteristic,
      );
    };
  }, []);
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
          <TouchableOpacity onPress={startScan} style={styles.btnSearchMini}>
            <Icon.Search height={20} />
          </TouchableOpacity>
        </Block>
        {/* sensor component  */}
        {list.map((value, index) => {
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
