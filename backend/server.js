import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";
import User from "./src/models/User.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.post('/api/users',async (req,res)=>{
    const {email } = req.body
    console.log(email);
    
    const user = await User.findOne({email})
    if(user){
        res.json({hasAccount:true})
        return
    }
    res.json({hasAccount:false})
})

app.listen(PORT, () => console.log(` Server ruing on ${PORT}`));
