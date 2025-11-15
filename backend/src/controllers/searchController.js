
import Business from "../models/Business.js";

async function Search(req, res) {
  const { data } = req.query
  const dataa = data.trim()
  
  const business = await Business.find({ businessName: { $regex: dataa, $options: 'i' } })
  console.log(business)
  res.json({ data: business })
}

export { Search }