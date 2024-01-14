const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const fetchUser=require("../middleware/fetchuser");
const { findByIdAndUpdate } = require("../models/User");
//*****ROUTE1**********Get a user's notes.using GET "/api/notes/getnotes". login needed
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
  try {
    const notes=await Notes.find({user: req.user.id})
    res.json(notes);
  } catch (error) {
    console.error(error.message);
        res.status(500).send("Internal server error");
  }
  
})
//*****ROUTE2**********Create notes.using POST "/api/notes/createnotes". login needed
router.post('/createnotes',[
     body("title", "Enter a valid Title").isLength({ min: 3 }), //VALIDATIONS
     body("description", "Enter a valid description").isLength({ min: 5 }),
   ],fetchUser,async (req,res)=>{
  try {
    const { title, description,tag } = req.body;
    const galtiya = validationResult(req);
    if (!galtiya.isEmpty())
      return res.status(400).json({ galtiya: galtiya.array() });

   const notee=new Notes({
      title,description,tag,user:req.user.id
   })
   const savedNote=await notee.save()
   res.json(savedNote)
  } catch (error) {
    console.error(error.message);
        res.status(500).send("Internal server error");
  }
  
})
//*****ROUTE3**********Update notes.using PUT "/api/notes/updatenotes". login needed
router.put('/updatenotes/:id',fetchUser,async (req,res)=>{
     const {title,description,tag}=req.body;
     try {
      const newnote={};
     if(title){newnote.title=title}
     if(description){newnote.description=description} 
     if(tag){newnote.tag=tag}

    //Find the note to be updated and update it
   let note= await Notes.findById(req.params.id)
    if(!note){return res.status(400).send("Not Found")}
    if(note.user.toString()!==req.user.id){return res.status(401).send("Not Allowed")}// updation and jo change hone wala hai uki id same honi chahiye

    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
    res.json({note})
     } catch (error) {
      console.error(error.message);
        res.status(500).send("Internal server error")
     }
     //create a new note object
     
})


//*****ROUTE3**********Delete notes.using Post "/api/notes/deletenote". login needed
router.delete('/deletenote/:id',fetchUser,async (req,res)=>{
  try {
    let note= await Notes.findById(req.params.id)
 if(!note){return res.status(400).send("Not Found")}
 if(note.user.toString()!==req.user.id){return res.status(401).send("Not Allowed")}// delete if & only if user matches
 note=await Notes.findByIdAndDelete(req.params.id)
 res.json({"Success":"NOte has been deleted",note:note})
  } catch (error) {
    console.error(error.message);
        res.status(500).send("Internal server error")
  }

 //Find the note to be deleted and delete it

})
module.exports=router