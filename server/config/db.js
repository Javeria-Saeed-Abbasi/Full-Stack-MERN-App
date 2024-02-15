const mongoose = require("mongoose");
const mqtt = require("mqtt");
const colors = require("colors");

// const client = mqtt.connect("mqtt://test.mosquitto.org");
// client.on("connect", () => {
//     client.subscribe("presence", (err) => {
//         if (!err) {
//             client.publish("presence", "Hello mqtt");
//         }
//     });
// });

// client.on("message", (topic, message) => {
//     // message is Buffer
//     console.log(message.toString());
//     client.end();
// });
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL_CLOUD)
        console.log(`Connected to MONGO Database ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`error in connection DB ${error}`.bgRed.white);
    }
}

module.exports = connectDB;