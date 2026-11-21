require("dotenv").config() // without it cannt use process.env in db.js

const app=require("./src/app")
const connectToDB=require("./src/conig/db.js")
connectToDB()

app.listen(3000,()=>{
    console.log("port is listening at 3000")
})