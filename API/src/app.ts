import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import escuelaRoute from "./routes/escuelaRoutes"
import categoriaRoutes from "./routes/categoriaRoutes"
import ringRoutes from './routes/ringRoutes'
import eventoRoutes from './routes/eventoRoutes'

let date = 0
const multer = require('multer')
const storage = multer.diskStorage(
  {
    filename:function(res: any, file:any, cb:any){
       date = Date.now()
       const ext = file.originalname.split('.').pop()
       const fileName = date
       cb(null, `${fileName}.${ext}`)
    },destination:function(res:any, file:any, cb:any){
      cb(null, `./public`)
    }
  }
)
const upload = multer({storage})

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.post('/upload', upload.single('foto'),(req, res)=>{
    res.json(date)
})

app.use(express.static('./public'))
app.use("/", userRoutes);
app.use("/", escuelaRoute);
app.use("/", categoriaRoutes);
app.use("/", ringRoutes);
app.use("/", eventoRoutes);

export default app;
