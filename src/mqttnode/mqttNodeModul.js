import * as Mqtt from 'react-native-native-mqtt';
import { Buffer } from "buffer"


const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
const defaultConnectOptions = {

 
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
 
};


export default class MQTTConnection {
  constructor() {
    this.client = null;
  }
 
  mqttconnect() {
   // 'tcp://iot.sytes.net:1883'

     this.client = new Mqtt.Client('tcp://iot.sytes.net:1883');
    this.client.connect(
      {
        keepalive: 60,
        clientId: 'Mobile01',
        username: 'ktht',
        password: 'nckh2021',
        cleanSession: true,
       
      },
      err => {
        console.log(err);
      }
    );

this.client.on(Mqtt.Event.Message, (topic, message) => {
  console.log('Mqtt Message:', topic, message.toString());
});
this.client.on(Mqtt.Event.Connect,this.onMQTTSuccess);
this.client.on(Mqtt.Event.Disconnect, this.onMQTTFailure);

  }
  onMQTTSuccess = () => {
    this.onMQTTConnect()
}
  onMQTTFailure = () => {
    this.onMQTTLost()
}

subscribeChannel() {
    console.log('MQTTConnection subscribeChannel: ' )
    if (!this.client||!this.client.connected ) {
        return;
    }
   this.client.subscribe(['/v1/devices/me/telemetry'], [0]);
}

unsubscribeChannel() {
    console.log('MQTTConnection unsubscribeChannel: ')
    if (!this.client||!this.client.connected ) {
        return;
    }
    this.client.unsubscribe(['/v1/devices/me/telemetry'], [0]);
}

send( mess) {
    console.log('MQTTConnection send: ')
    console.log(this.client.connected)
    if (!this.client||!this.client.connected) {
      console.log("lost data")
      
        return;
    }

    //var buf = Buffer.from(mess);
    console.log("mqtt send : "+mess)
    this.client.publish('v1/devices/me/telemetry',Buffer.from(mess), 0, true);
}

close() {
    this.client && this.client.disconnect();
    this.client = null;
}
   



}

MQTTConnection.prototype.onMQTTConnect = null;
MQTTConnection.prototype.onMQTTLost = null;

