const exp=require("express")
const router=exp.Router()
const Cat=require("../model/Category_db")

router.post("/add",async(req,res)=>{


    var inscat={
        categoryName:req.body.cname,  
    };
    await Cat.create(inscat);
    console.log(req.body)

    res.json({msg:"Add Catagory"});
});

router.get("/sel",async(req,res)=>{
    var data=await Cat.find();
    res.json(data);
});

router.post("/del",async(req,res)=>{
    var id=req.body.id;
    await Cat.findByIdAndDelete(id);
    res.json({msg:"deleted"});
})

router.post("/edit",async(req,res)=>{
    var data=await Cat.findById(req.body.id);
    res.json(data);
});


router.post("/upd",async(req,res)=>{


    var inscat={
        categoryName:req.body.cname,  
    };
    await Cat.findByIdAndUpdate(req.body.id,inscat);

    res.json({msg:"Add Catagory"});
});

module.exports=router;