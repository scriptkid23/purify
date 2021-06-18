import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {Block} from '../../components';
import {styles} from '../../styles/dashboard.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faThermometerHalf,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import {LineChart, Grid} from '../../components/Charts';
import * as shape from 'd3-shape';
import {MyContext} from '../../context/MyContext';
import BleManager from 'react-native-ble-manager';
import {TextDecoder} from 'text-decoding';
import {stringToBytes} from 'convert-string';
import CacbonicCard from './card/CacbonicCard';

const data = [30.5, 30, 29, 31, 31.5, 28.9];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Dashboard({navigation}) {
  const {data, scanPeripherals, connectToSensor,reloadData,DeleteAlll,InsertData } = useContext(MyContext);
  const [value, setValue] = React.useState(0);
  const [conncected,setconnected]=useState(false);
  const[mqttcn,setmqttcn]=useState(false);
  const [DbList,setDbList]=useState([]);
  const[list,setList]=useState('');
  
  const getDataFromServer = async () => {
    const readChracteristic = await BleManager.read(
      data.currentPeripheralId,
      data.serviceUUID,
      data.characteristicUUID,
    );
    const utf8decoder = new TextDecoder('utf-8');
    const utf8Arr = new Uint8Array(readChracteristic);
    console.log(utf8decoder.decode(utf8Arr));//data
    setList(utf8decoder.decode(utf8Arr));
    setValue(utf8decoder.decode(utf8Arr));
  };

  React.useEffect(() => {
    console.log(JSON.stringify(data));
    let intervalId = setInterval(() => {
      getDataFromServer();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  unsubscribe=null;
  const mqttConnect=null;
  React.useEffect(()=>{

    this.unsubscribe = NetInfo.addEventListener(state => {
    
      setconnected(state.isConnected);
    });


     
   if(!conncected){
     setmqttcn(false);
   }
   if(conncected&&!mqttcn){
    this.mqttConnect = new MQTTConnection()
    this.mqttConnect.onMQTTConnect = this.onMQTTConnect
    this.mqttConnect.onMQTTLost = this.onMQTTLost
    this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived
    this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered
   
   
    this.mqttConnect.connect("broker.emqx.io",8083)

  
    onMQTTConnect = () => {
        console.log('App onMQTTConnect')
        this.mqttConnect.subscribeChannel('huydz')
        setmqttcn(true);
       
    }
   
    onMQTTLost = () => {
        console.log('App onMQTTLost')
    }

    onMQTTMessageArrived = (message) => {
        console.log('App onMQTTMessageArrived: ', message);
        console.log('App onMQTTMessageArrived payloadString: ', message.payloadString);
    }

    onMQTTMessageDelivered = (message) => {
        console.log('App onMQTTMessageDelivered: ', message);
    }
    if(conncected&&mqttcn){
      this.mqttConnect.send('huydz',list);
    }else{
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear(); 
      var hours = new Date().getHours(); 
      var min = new Date().getMinutes(); 
      var sec = new Date().getSeconds(); 
      var time=sec+":"+min+":"+hours+" "+date+"/"+month+"/"+year;
         InsertData(list.humidity,list.temperature,time);
    }
 
  }

  });
  reloadData=()=>{
    queryALLTodoList().then((todoLists)=>{

   setDbList(todoLists);
  
  }).catch((error)=>{
    setDbList([]);
         console.log(error);
        
});
   
 }
  React.useEffect(() => {
   
    reloadData();

     if(DbList.length>1&&mqttcn&&conncected){

       DbList.forEach((element) => {
         console.log(element.value);
         this.mqttConnect.send('huydz',element.value);
         
       });

       DeleteAlll();
  
     }

  },[mqttcn]);
  

  const Line = ({line}) => (
    <Path
      key={'line'}
      d={line}
      stroke={'rgb(134, 65, 244)'}
      fill={'none'}
      strokeWidth={3}
    />
  );
  return (
    <Block>
      <Block row noflex margin={10}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            size={35}
            style={{marginTop: 3}}
            color={'#132767'}
            icon={faAngleLeft}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 29,
            color: '#132767',
            fontFamily: 'Aeonik',
            letterSpacing: 50,
            fontWeight: 'bold',
          }}>
          Dashboard
        </Text>
      </Block>
      <Block center margin={30}>
        <Block
          noflex
          style={{
            backgroundColor: '#fff',
            width: width - 30,
            height: height / 3,
            borderRadius: 20,
            padding: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          {/* <Text
            style={{
              fontSize: 19,
              fontFamily: 'Aeonik',
              letterSpacing: 10,
              color: '#132767',
              fontWeight: '600',
            }}>
            Temperature
          </Text> */}
          <Block row center>
            <FontAwesomeIcon
              color={'#132767'}
              size={60}
              icon={faThermometerHalf}
            />
            <Block marginTop={10}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#132767',
                }}>
                {value}°<Text style={{fontSize: 30}}>C</Text>
              </Text>

              <Block row>
                <FontAwesomeIcon
                  style={{marginTop: 13}}
                  color={'#FF3061'}
                  size={30}
                  icon={faSortUp}
                />
                <Text
                  style={{
                    fontSize: 30,
                    color: '#FF3061',
                  }}>
                  3<Text style={{fontSize: 20}}>%</Text>
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <CacbonicCard/> 
    </Block>
  );
}
