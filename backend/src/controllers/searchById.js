import Business from "../models/Business.js";

async function SearchById(req, res) {
  const { id } = req.params
  console.log(id);
  
  const business = await Business.findById(id)
  res.json({ data: business })
}

export { SearchById }