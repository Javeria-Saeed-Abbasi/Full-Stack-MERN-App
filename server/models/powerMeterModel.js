const mongoose = require("mongoose");

//schema
const powerMeterSchema = new mongoose.Schema(
    {
        device_id: {
            type: String,
        },
        voltage: {
            type: Number,
        },
        ampere: {
            type: Number,
        },
        energy: {
            type: Number,
        },
        frequency: {
            type: Number,
        },
        Watt: {
            type: Number,
        },
        powerFactor: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("PowerMeter", powerMeterSchema);