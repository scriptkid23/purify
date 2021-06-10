import React, {Component} from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const MyContext = React.createContext();

const peripherals = new Map();
class MyProvider extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!

    this.state = {
      counter: 0,

      list: [],
      isScanning: false,
    };
  }
  scanPeripherals = async () => {
    console.log('waiting...');
    try {
      this.setState({isScanning:true});
      await BleManager.scan([], 5, true);
    } catch (error) {
      console.log(error);
    }
  };
  handleStopScan = () => {
    console.log('Scan is stopped');
    this.setState({isScanning:false});
  };
  connectToSensor = () => {
    console.log(this.state.list);
  };
  handleDisconnectedPeripheral = data => {
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({
        list: Array.from(peripherals.values()),
      });
    }
    console.log('Disconnected from ' + data.peripheral);
  };
  handleUpdateValueForCharacteristic = data => {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  };
  handleDiscoverPeripheral = peripheral => {
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    this.setState({
      list: Array.from(peripherals.values()),
    });
  };
  componentDidMount(){
    BleManager.start({showAlert: false});

    bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
    bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
    bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
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
  }
  componentWillUnmount(){
    console.log('unmount');
    bleManagerEmitter.removeEventListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
    bleManagerEmitter.removeEventListener(
      'BleManagerStopScan',
      this.handleStopScan,
    );
    bleManagerEmitter.removeEventListener(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );
    bleManagerEmitter.removeEventListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );
  }



  render() {
    return (
      <MyContext.Provider value={{
        data:this.state,
        scanPeripherals:this.scanPeripherals,
        connectToSensor:this.connectToSensor,
     }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export {MyContext, MyProvider};
