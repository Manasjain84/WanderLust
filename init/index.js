const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://localhost:27017/wanderlust';      

main()
.then(() => {
    console.log('MongoDB connection established');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
    
}

const initDB = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({...obj, owner:'69c4b31ff865455d74776535'}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
}

initDB();