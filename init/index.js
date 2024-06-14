const mongoose = require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

main()
.then((res) => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function initDB() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "666933df066ffa7ab53dacd3"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();