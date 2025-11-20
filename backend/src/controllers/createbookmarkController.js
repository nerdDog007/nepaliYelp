function createBookmark(req,res){
    console.log(req.body);
    res.json({success:true})
}

export default createBookmark;