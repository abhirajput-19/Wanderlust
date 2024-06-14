const User = require("../models/user");

module.exports.renderSignUpForm = async(req, res) => {
    res.render("../views/users/signup.ejs");
}

module.exports.signup = async(req, res) => {
    try {
        let {username, email, password} = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.logIn(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = async(req, res) => {
    res.render("../views/users/login.ejs");
}

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = async(req, res) => {
    req.logOut((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
}