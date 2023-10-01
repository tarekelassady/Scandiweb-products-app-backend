import {db} from "../db.js"
import express from "express";
const router=express.Router();

//get all products
router.get("/",(req,res)=>{
    const q="SELECT * FROM tblproducts";
    db.query(q,[req.query.cat],(err,data)=>{
        if (err) return res.status(600).json(err);
        return res.status(200).json(data);
    })
    
})

//get single product by SKU
router.get("/:sku",(req,res)=>{
    const q="SELECT * from tblProducts WHERE sku=?"
    db.query(q,[req.params.sku],(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    })

})
//Add a product
router.post("/",(req,res)=>{
    const q="INSERT INTO tblproducts (sku,name,price,type, size,weight,height,width,length,img,description, date) VALUES (?)";
    const values=[
        req.body.getSKU,
        req.body.getName,
        req.body.getPrice,
        req.body.getType,
        req.body.getSize,
        req.body.getWeight,
        req.body.getHeight,
        req.body.getWidth,
        req.body.getLength,
        req.body.img,
        req.body.getDescription,
        req.body.date,
    ]
    console.log(values);
    db.query(q,[values],(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Product has been added successfully");
        
    })
});

//Delete a product
router.delete("/:id",(req,res)=>{

     const q="DELETE FROM tblProducts where id =?";
        db.query(q,[req.params.id],(err,data)=>{
            if (err) return res.status(403).json("You can only delete your post");
            return res.status(200).json("Post has been deleted");
})
    
});
//Update a product
router.get("/:d",(req,res)=>{
    const q="UPDATE tblProducts SET sku=?,name=?,price=?,type=?, size=?,weight=?,height=?,width=?,length=?,img=?,description=?, date=? WHERE id=?";
    const values=[
        req.body.getSKU,
        req.body.getName,
        req.body.getPrice,
        req.body.getType,
        req.body.getSize,
        req.body.getWeight,
        req.body.getHeight,
        req.body.getWidth,
        req.body.getLength,
        req.body.img,
        req.body.getDescription,
        req.body.date,
    ]
    console.log(values ,req.params.id,req.body.userId);
    db.query(q,[...values,req.params.id,req.body.userId],(err,data)=>{
        if (err) return res.status(500).json(err);
        console.log("artice is updated");
        return res.status(200).json("Article has been updated successfully");
        
    })
})

export default router