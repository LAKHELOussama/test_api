import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './modules/user/user.router';
import { App } from './modules/app/app';

try{

  App.init()
}catch(error){
  
}