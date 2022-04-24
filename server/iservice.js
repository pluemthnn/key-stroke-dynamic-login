const UserModel = require("./models/Users");

async function getByUsername(userParam) {
    console.log("seaching for username...");
    const response = await UserModel.findOne({ username: userParam.username,  password: userParam.password });
    return response;
}

async function create(userParam) {
    console.log("creating...");
    // validate
    if (await UserModel.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new UserModel(userParam);

    // save user
    await user.save();
}

module.exports = {
    getByUsername,
    create,
};
