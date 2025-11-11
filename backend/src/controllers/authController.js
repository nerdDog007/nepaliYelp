import User from '../models/User.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, coord } = req.body;
    const [lat, long] = coord;

    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Invalid email" });

    const hashed = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name: fullName,
      email,
      password: hashed,
      lat,
      long
    });
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
      user: { fullName: user.name, email: user.email, user_id: user._id }
    });

  } catch (err) {
    res.status(500).json({ message: "Signup error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ success: false, message: "User not found" });

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return res.json({ success: false, message: "Wrong password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  res.json({
    success: true,
    token,
    user: { email: user.email, user_id: user._id, fullName: user.name }
  });
};
