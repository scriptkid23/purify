import{connect} from 'mqtt/dist/mqtt';
import uuid from 'react-native-uuid';
import {AsyncStorage} from '@react-native-community/async-storage';



const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
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
      retain: false
    },
}
const host1 = 'ws://broker.emqx.io:8083/mqtt'

export default class MQTTConnection {
    constructor() {
        this.cilent=null;
        this.QOS = 0;
        this.RETAIN = true;
       
    }

    mqttconnect(host, port, options = null) {
        if (options) {
            this.QOS = options.qos;
            this.RETAIN = options.retain;
        }

     //var mien='ws://'+host+':'+port+'/mqtt';
    
      client = connect(host1, defaultConnectOptions)
        cilent.on('connect',(()=>{console.log("oke")}))
     
    }
    
}

MQTTConnection.prototype.onMQTTConnect = null
MQTTConnection.prototype.onMQTTLost = null
MQTTConnection.prototype.onMQTTMessageArrived = null
MQTTConnection.prototype.onMQTTMessageDelivered = null