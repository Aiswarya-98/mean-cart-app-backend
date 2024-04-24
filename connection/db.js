const mongoose = require ('mongoose')

const connectionString = process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
  (res)=>{
    console.log("Daily cart server connected successfully with Mongodb atlas");

  }
).catch((err)=>{
  console.log(err);
})