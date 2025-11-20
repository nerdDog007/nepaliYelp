import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  category: { type: String },
  description: { type: String, default: "" },
  phone: String,
  shortDescription: { type: String, default: "" },
  locationName: { type: String },
  coordinates: { latitude: Number, longitude: Number },
  url: { type: [String], default: [] },
  features: { type: [String], default: [] },
  priceRange: { type: Number, min: 1, max: 4 },
  hours:{
    monday:{
      open:String,
      close:String,
      closed:Boolean
    },
    tuesday:{
      open:String,
      close:String,
      closed:Boolean
    },  
    wednesday:{
      open:String,
      close:String,
      closed:Boolean 
    },
    thursday:{
      open:String,
      close:String,
      closed:Boolean
      },
     friday:{
      open:String,
      close:String,
      closed:Boolean
      }, 
     saturday:{
      open:String,
      close:String,
      closed:Boolean
      }	,
     sunday:{
      open:String,
      close:String,
      closed:Boolean
    }
   
  },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      stars: Number,
      reviewText: String,
      images: [String],
      createdAt: { type: Date, default: Date.now }
    }
  ],
  averageRating: { type: Number, default: 0 },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Business", BusinessSchema);
