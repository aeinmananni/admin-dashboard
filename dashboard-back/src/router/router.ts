import express, { Application } from 'express';
import compression from "compression";
import cors from 'cors';
import subMenuItem from '../start/subMenuItem';

export default  (app:Application) =>{
     app.use(express.json());
     app.use(compression());
     app.use(cors());
     app.use(express.urlencoded({extended:false}));
     app.use("/api/subMenu", subMenuItem);
}