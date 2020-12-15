const { Router } = require("express");
const router = Router();
const BookingController = require("../../controllers/booking.controller");


router.get("/", BookingController.getInterventions);

module.exports = router;
