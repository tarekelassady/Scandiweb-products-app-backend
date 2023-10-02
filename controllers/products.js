import {db} from "../db.js"
import express from "express";
const router=express.Router();


//Create a product
router.post("/",async(req,res)=>{
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
    await db.query(q,[values])
    .catch(err=>console.log(err))
        return res.status(200).json("Product has been added successfully");
    });

//Get (Read) all products
router.get("/",async(req,res)=>{
    const [products]=await db.query("SELECT * FROM tblproducts")
    .catch(err=>console.log(err));
    res.send(products)
})

//Get (Reed) single product by SKU
router.get("/:sku",async(req,res)=>{
    // const [product]=await db.query("SELECT * FROM tblproducts WHERE sku=?", [req.params.sku] ) //OR
    const [product]=await db.query("SELECT * FROM tblproducts WHERE sku='" + req.params.sku + "'" )
    .catch(err=>console.log(err));
    return res.send(product);
})

//Update a product
router.get("/:id",async(req,res)=>{
    const q="UPDATE tblproducts SET sku=?,name=?,price=?,type=?, size=?,weight=?,height=?,width=?,length=?,img=?,description=?, date=? WHERE id=?";
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
    console.log(values ,req.params.id);
    await db.query(q,[values,req.params.id])
    .catch(err=>console.log(err));
    console.log("artice is updated");
    return res.status(200).json("Article has been updated successfully");
    })


//Delete a product
router.delete("/:id",async(req,res)=>{
    db.query("DELETE FROM tblproducts where id=" + [req.params.id])
    .catch(err=>console.log(err))
    res.send("The product has been deleted successfully");
})

export default router