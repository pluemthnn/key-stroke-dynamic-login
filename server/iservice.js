const UserModel = require("./models/Users");

async function getByUsername(username) {
    console.log("seaching for username...");
    const ans = await UserModel.findOne({ username: username });
    console.log(ans);
    return ans;
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
