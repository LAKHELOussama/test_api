import express from 'express';
import mongoose from 'mongoose';
import userRoutes from '../user/user.router';
import { AppRouter } from './app.router';
import { UserService } from "../user/user.service";
import cors from 'cors';
import 'dotenv/config';


export class App {
  private userService: UserService;


  constructor() {
    this.userService = new UserService();

  }

  public static async init() {
    const app = express();
    app.use(cors({
      origin: 'http://localhost:3000',
    }));
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    
    
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      throw new Error('DB_URL environment variable is not defined');
    }
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('MongoDB connection error:', err));
    AppRouter.router(app);

 
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }

 
  
  
}
