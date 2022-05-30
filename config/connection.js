const mongoose = require("mongoose")

let DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL);
let dbase = mongoose.connection
dbase.on("open", () => console.log(`Mongo run db:${dbase.host}:${dbase.port}`))
.on("close", () => console.log("Mongo close"))
.on("error", (err) => console.log(`Mongo error --> ${err}`))







