const mongoose = require("mongoose")
const cowsay = require("cowsay")

mongoose.connect(process.env.DATABASE_URL);
let dbase = mongoose.connection
dbase.on("open", () => console.log(`Mongo run moo db:${dbase.host}:${dbase.port}`))
.on("close", () => console.log(cowsay.say({text: "Mongo broke moo"})))
.on("error", (err) => console.log(cowsay.say({text: `Mongo error moo --> ${error}`})))







