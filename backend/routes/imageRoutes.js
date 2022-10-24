const cloudinary=require('cloudinary')
const router=require('express').Router()
require('dotenv').config();

cloudinary.config({
    cloud_name:"djwovgwav",
    api_key:"494483937364742",
    api_secret:"r0QebepzlV9CS9rNjBPE4U6dt6E"
})

router.delete('/:public_id', async(req, res)=> {
    const {public_id} = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message)
    }
  })
  

module.exports=router;