const mongoose=require("mongoose");
const { DB_URI } = require("../../constant");

const connectDB=async()=>{
    await mongoose.connect(DB_URI);
}

module.exports={connectDB};
