const mongoose = require("mongoose");

const client = mongoose.connect(
    process.env.DBURI,
    { useNewUrlParser: true },
    () => console.log("connected to db!!")
  );

module.exports={
    client
}