import  {Router,Request,Response} from 'express';
const router = Router();



router.get("/GET/All",(req:Request,res:Response) =>{

    res.send("wellcom To Sidebar");
});



export default router;

