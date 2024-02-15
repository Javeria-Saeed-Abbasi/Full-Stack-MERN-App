const powerMeterModel = require("../models/powerMeterModel");


//powerMeterController
const powerMeterController = async (req, res) => {
    try {
        const { voltage, ampere, energy, frequency, Watt, powerFactor } = req.body;
        //validation
        if (!voltage) {
            return res.status(400).send({
                success: false,
                message: "voltage is required",
            });
        }
        if (!ampere) {
            return res.status(400).send({
                success: false,
                message: "ampere is required",
            });
        }
        if (!energy) {
            return res.status(400).send({
                success: false,
                message: "energy is required",
            });
        }
        if (!frequency) {
            return res.status(400).send({
                success: false,
                message: "frequency is required",
            });
        }
        if (!Watt) {
            return res.status(400).send({
                success: false,
                message: "Watt is required",
            });
        }

        if (!powerFactor) {
            return res.status(400).send({
                success: false,
                message: "powerFactor is required",
            });
        }



        //save data
        savedData = async (data) => {
            data = new powerMeterModel(data)
            data = await data.save();
            console.log('Data Saved', data);
        }

        return res.status(201).send({
            success: true,
            message: "data saved failed",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Register API",
            error,
        });
    }
};
module.exports = {
    powerMeterController,
};