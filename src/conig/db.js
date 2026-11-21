const mongoose=require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)  // returns a promise..
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log("error")
        process.exit(1)  // close my server without connecting to database bcz unless it just cause resources lost
    })
}

module.exports=connectToDB