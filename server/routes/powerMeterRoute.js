const express = require("express");
const {
    powerMeterController
} = require("../controllers/powerMeterController");

//router object
const router = express.Router();
//routes

// MeterData || POST
router.post("/meterData", powerMeterController);

//export
module.exports = router;