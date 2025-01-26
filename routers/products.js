import express from 'express';
const router = express.Router();

let products = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 4445, quantity: 30, description: 'Fresh red apples', supplier: 'FruitCo' },
  { id: 2, name: 'Banana', category: 'Fruit', price: 442, quantity: 50, description: 'Ripe yellow bananas', supplier: 'TropicalFruits' },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 448, quantity: 40, description: 'Organic carrots', supplier: 'VeggieFarm' },
  { id: 4, name: 'Chicken', category: 'Meat', price: 540, quantity: 20, description: 'Free-range chicken', supplier: 'FarmMeat' },
  { id: 5, name: 'Milk', category: 'Dairy', price: 220, quantity: 100, description: 'Fresh whole milk', supplier: 'DairyFarm' },
  { id: 6, name: 'sas', category: 'Bakery', price: 125, quantity: 60, description: 'Freshly baked bread', supplier: 'BakeryBest' },
];

// Get all products
router.get('/products', (req, res) => {
  res.json(products);
});

// Add new product
router.post('/products', (req, res) => {
  const newProduct = req.body;
  if (!newProduct.name || !newProduct.price) {
    return res.status(400).send('Product name and price are required');
  }
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Delete product by ID
router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).send('Product not found');
  }
  products.splice(productIndex, 1);
  res.send('Product deleted');
});

// Update product by ID
router.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).send('Product not found');
  }
  products[productIndex] = { ...products[productIndex], ...updatedProduct };
  res.json(products[productIndex]);
});

export default router;
