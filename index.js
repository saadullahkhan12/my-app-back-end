import  express  from "express";
const app = express();
const PORT = 4000;

let products = [
    { id: 1, name: "Apple", category: "Fruit", price: 4445, quantity: 30, description: "Fresh red apples", supplier: "FruitCo" },
    { id: 2, name: "Banana", category: "Fruit", price: 442, quantity: 50, description: "Ripe yellow bananas", supplier: "TropicalFruits" },
    { id: 3, name: "Carrot", category: "Vegetable", price: 448, quantity: 40, description: "Organic carrots", supplier: "VeggieFarm" },
    { id: 4, name: "Chicken", category: "Meat", price: 540, quantity: 20, description: "Free-range chicken", supplier: "FarmMeat" },
    { id: 5, name: "Milk", category: "Dairy", price: 220, quantity: 100, description: "Fresh whole milk", supplier: "DairyFarm" },
    { id: 6, name: "Bread", category: "Bakery", price: 125, quantity: 60, description: "Freshly baked bread", supplier: "BakeryBest" }
  ];

app.get ( "/", ( req, res)=>{
console. log(req);

    res.send(products);
});
app.post ( "/", ( req, res)=>{
    console. log(req);
    
        res.send("Hello sir");
    });
    app.delete ( "/", ( req, res)=>{
        console. log(req);
        
            res.send("Hello madam");
        });
        app.put ( "/", ( req, res)=>{
            console. log(req);
            
                res.send("Hello teacher");
            });
        
app.listen(PORT , ()=>
    console.log( "port" + PORT )
    
);