const mongoose =require("mongoose")
const bcrypt=require("bcryptjs")  


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Emil is required"],
        trim:true,
        unique:[true,"Email already exists"],
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[6,"password should contain atleast 6 characters"],
        select:false, // it do not automatically bring my password alongwith username unless i call it.
    },
  
}, {
        timestamps:true
    })

    userSchema.pre("save",async function(next){   // password security your password plain text convert into hash and do not convert into plain text later

        if(!this.isModified("password")){
            return 
        }

        const hash=await bcrypt.hash(this.password,10)
        this.password=hash

        return 
    })

    userSchema.methods.comparePassword=async function (password){
        return await bcrypt.compare(password,this.password)
    }

    const User=mongoose.model("user",userSchema);

    module.exports=User