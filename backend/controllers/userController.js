const registerUser = (req, res) => {
    res.send("Register User");
    if(!req.body.email) {
        res.status(400);
        throw new Error("Please add an e mail");
    }
};

module.exports = {
    registerUser
};