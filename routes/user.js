let express = require('express');
let router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const {saveRedirectUrl} = require('../middlewares');
const userController = require("../controllers/users");

router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login", 
            failureFlash: true
        }),
        userController.login
    );

router.get("/logout", userController.logout);   

module.exports = router;