const mongoose = require("mongoose")

const DB = process.env.MONGODB_URI

mongoose.connect(DB).then(()=>console.log("MongoDB connected")).catch((error)=>console.log("error connecting mongodb", error))