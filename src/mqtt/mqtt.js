import init from 'react_native_mqtt';
import uuid from 'react-native-uuid';
import {AsyncStorage} from '@react-native-community/async-storage';



init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync: {},
});

const defaultConnectOptions = {
    reconnect: false,
    cleanSession: true,
    mqttVersion: 3,
    keepAliveInterval: 10,
    timeout: 10
}

export default class MQTTConnection {
    constructor() {
        this.mqtt = null;
        this.QOS = 0;
        this.RETAIN = true;
       
    }

    connect(host, port, options = null) {
        if (options) {
            this.QOS = options.qos;
            this.RETAIN = options.retain;
        }

        let currentTime = +new Date();
        let clientID = currentTime + uuid.v1();
        clientID = clientID.slice(0, 23);
        console.log('clientID: ', clientID)// tạo clientId
   console.log(host+' '+port)
        this.mqtt = new Paho.MQTT.Client(host,port,clientID);// kết nối mqtt
       
        this.mqtt.onConnectionLost = (res) => {
            this.onMQTTLost;
        };
        this.mqtt.onMessageArrived = (message) => {
            this.onMQTTMessageArrived(message);
        };
        this.mqtt.onMessageDelivered = (message) => {
            this.onMQTTMessageDelivered(message);
        };

        const connectOptions = options ? options : defaultConnectOptions;

        this.mqtt.connect({
            onSuccess: this.onMQTTSuccess,
            onFailure:this.onMQTTFailure,
            ...connectOptions

           
        });
      
    }
     getCn(){
         return this.mqtt.isConnected();
     }
    onMQTTSuccess = () => {
        this.onMQTTConnect()
    }

    onMQTTFailure = () => {
        this.onMQTTLost()
    }

    subscribeChannel(channel) {
        console.log('MQTTConnection subscribeChannel: ', channel)
        if (!this.mqtt || !this.mqtt.isConnected()) {
            return;
        }
        this.mqtt.subscribe(channel, this.QOS);
    }

    unsubscribeChannel(channel) {
        console.log('MQTTConnection unsubscribeChannel: ', channel)
        if (!this.mqtt || !this.mqtt.isConnected()) {
            return;
        }
        this.mqtt.unsubscribe(channel);
    }

    send(channel = null, payload) {
        console.log('MQTTConnection send: ')
        if (!this.mqtt||!this.mqtt.isConnected()) {
           
           console.log(12);
            return;
        }

        if (!channel || !payload) {
            return false;
        }
        console.log(`MQTTConnection send publish channel: ${channel}, payload: ${payload} qos: ${this.QOS} retained: ${this.RETAIN}`)
        this.mqtt.publish(channel, payload, this.QOS, this.RETAIN);
    }

    close() {
        this.mqtt && this.mqtt.disconnect();
        this.mqtt = null;
    }
    

}

MQTTConnection.prototype.onMQTTConnect = null
MQTTConnection.prototype.onMQTTLost = null
MQTTConnection.prototype.onMQTTMessageArrived = null
MQTTConnection.prototype.onMQTTMessageDelivered = null