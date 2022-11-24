const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const User = require("./users.model");

const connect = (name) =>
    mongoose
        .connect(`mongodb://localhost/${name}`)
        .catch((e) => console.error(e))
        .then((r) => console.log(`Connected to ${r.connection.name}`));

const insertAll = async () => {
    await User.deleteMany();

    const userList = JSON.parse(
        fs.readFileSync(path.join(__dirname, "users.json"))
    );

    return await User.insertMany(userList)
        .then(() => console.log("Inserted users"))
        .catch((e) => console.error(e));
};

module.exports = { connect, insertAll };
