import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routers/Users.js';
import productsRoutes from './routers/products.js';
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

function middleware(req, res, next) {
  console.log('middleware');
  next();
}
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



app.use(middleware);

app.use('/users', userRoutes);
app.use('/items', productsRoutes);  // Make sure this points to products route
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
