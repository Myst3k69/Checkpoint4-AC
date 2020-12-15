const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const BookingController = require("../../controllers/booking.controller");
const validator = require('../../middleware/validator')
const { verifyToken} = require("../../services/jwt")

/* ********************* Routes for users handling ********************* */


// /* GET  users role */

// router.get("/roles", UserController.getRoles);

// /* GET all users. */

// router.get("/", UserController.getUsers);

// /* GET one user */

// router.get("/:id", UserController.getOne)

// /* delete one user */

// router.delete("/:id", UserController.deleteOne);

// /* Update one user */

// router.put("/:id", UserController.updateOne);


/* add one intervention */

router.post("/", BookingController.addBooking);


// /* forgotten password */

// router.post("/passwordrenew",  UserController.passwordRenew);

// /* change password */

// router.patch("/", validator.checkupdatePassword, UserController.updatePassword);


module.exports = router;
