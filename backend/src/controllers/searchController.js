
import Business from "../models/Business.js";

async function Search(req, res) {
  const { data } = req.query
  const business = await Business.find({ businessName: { $regex: data, $options: 'i' } })
  console.log(business)
  
  res.json({ data: business })
}

export { Search }