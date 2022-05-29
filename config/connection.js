const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL);
let dbase = mongoose.connection
dbase.on("open", () => console.log(`Mongo run db:${dbase.host}:${dbase.port}`))
.on("close", () => console.log("Mongo close"))
.on("error", (err) => console.log(`Mongo error --> ${error}`))







