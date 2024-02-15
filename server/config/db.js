const mongoose = require("mongoose");
const mqtt = require("mqtt");
const colors = require("colors");
const mqttBroker = 'mqtt://broker.hivemq.com';
const mqttTopic = 'testing';

const client = mqtt.connect(mqttBroker);
// Connect to MQTT broker
client.on('connect', async () => {
    console.log(`MQTT CONNECTED`.bgWhite.black);
});
// Subscribe to MQTT topic
client.on('connect', () => {
    client.subscribe(mqttTopic, (error) => {
        if (!error) {
            client.publish(mqttTopic, "Hello mqtt");
        }
    });

});
client.on('message', async (mqttTopic, message) => {
    console.log('MQTT Received Topic:', mqttTopic.toString(), 'Message:', message.toString());
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_CLOUD)
        console.log(`Connected to MONGO Database ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`error in connection DB ${error}`.bgRed.white);
    }
}

module.exports = connectDB;