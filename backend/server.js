import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/config/db.js";
import app from "./src/app.js";
import User from "./src/models/User.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(` Server ruing on ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";

// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://sandesh:password@localhost:27027/myDatabase?authSource=admin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // Create a simple User schema
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });

// const User = mongoose.model('User', userSchema);

// // Routes
// app.get('/', (req, res) => {
//     res.send("Express + MongoDB working");
// });

// app.post('/users', async (req, res) => {
//     const user = new User(req.body);
//     await user.save();
//     res.json({ message: "User created", user });
// });

// app.get('/users', async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// });

// // Run server
// app.listen(3000, () => console.log("Server running on port 3000"));
