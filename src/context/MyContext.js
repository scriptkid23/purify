import React, {Component} from 'react';
import {insertObject,queryALLTodoList,Deleteall} from '../database/database';
import NetInfo from "@react-native-community/netinfo";
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
      serviceUUID: '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
      characteristicUUID: 'beb5483e-36e1-4688-b7f5-ea07361b26a8',
      list: [],
      isScanning: false,
      currentPeripheralId: '',
    };
  }
 

 DeleteAlll=()=>{
  Deleteall().then(()=>{
    setDbList([]);
      console.log("xóa thành công");
     
  }).catch((error)=>{
      console.log(error);
  })
 };

 InsertData=(humidity,temperature,time)=>{
  const newTodoList ={
    id:Math.floor(Date.now()/1000),
    humidity:humidity,
    done:false,
    temperature:temperature,
    timestamp:time

}
  insertObject(newTodoList).then().catch((error)=>{
    alert(error);
});
 };

  scanPeripherals = async () => {
    console.log('waiting...');
    try {
      this.setState({isScanning: true});
      await BleManager.scan([], 5, true);
    } catch (error) {
      console.log(error);
    }
  };
  handleStopScan = () => {
    console.log('Scan is stopped');
    this.setState({isScanning: false});
  };
  connectToSensor = (peripheral, navigation) => {
    if (peripheral) {
      if (peripheral.connected) {
        console.log('disconnect to: ' + peripheral.id);
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              // setList();
              this.setState({list: Array.from(peripherals.values())});
            }
            this.setState({currentPeripheralId: peripheral.id});
            console.log('Connected to ' + peripheral.id);
            navigation.push('dashboard');

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
                      // setList();
                      this.setState({list: Array.from(peripherals.values())});
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
  disconnectSensor = () => {
    BleManager.disconnect(this.state.currentPeripheralId);
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
  componentDidMount() {
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
  componentWillUnmount() {
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
      <MyContext.Provider
        value={{
          data: this.state,
          scanPeripherals: this.scanPeripherals,
          connectToSensor: this.connectToSensor,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export {MyContext, MyProvider};
