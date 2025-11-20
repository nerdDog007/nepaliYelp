import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },
  profileImage: String,
  lat: String,
  long: String,

  createdAt: { type: Date, default: Date.now },
  bookmark:[
    {
      businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Business"
      },
    }
  ]
});
export default mongoose.model("User", UserSchema);
