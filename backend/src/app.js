import express from "express";
const app = express();
import {getData} from "./services/ai.services.js"
import cors from "cors"

// const allowedOrigins = [
//     "http://localhost:5174",
//     "https://incrediblesaizan1-code-review.vercel.app",
//   ];

  // app.use(
  //     cors({
  //       origin: function (origin, callback) {
  //         if (!origin || allowedOrigins.includes(origin)) {
  //           callback(null, true);
  //         } else {
  //           callback(new Error("Not allowed by CORS"));
  //         }
  //       },
  //       credentials: true, 
  //       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  //       allowedHeaders: ["Content-Type", "Authorization"], 
  //     })
  //   );

  let whitelist = ['https://incrediblesaizan1-code-review.vercel.app', 'http://localhost:5174']
  let corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

app.use(express.json());


app.get("/",cors(corsOptions), async(req, res) => {
   res.send("hello")
});

app.post("/",cors(corsOptions),async(req,res)=>{
    const question = req.body.code
    const data = await getData(question) 
    res.send(data)
})


export default app;
