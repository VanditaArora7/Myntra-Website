// const express =require("express")
// const app=express();
// const cors=require("cors");

// app.use(cors())

// app.get("/images",(req,res)=>{
//     res.json({

//     })
// })




// const port=8000;
// app.listen(port,()=>console.log("Server is running on port 8000"))

// import express from "express"
// import multer from "multer"
// import mongoose from "mongoose"
// import fs from "fs"
// import { Buffer } from "buffer"

// const app = express()
// const upload = multer({ dest: 'uploads/' })

// const imageSchema = new mongoose.Schema({
//   images: [{ data: Buffer, contentType: String }],
// })

// const ImageArray = mongoose.model('ImageArray', imageSchema)

// app.post('/upload', upload.array('image', 5), (req, res) => {
//   const newImageArray = new ImageArray()
//   newImageArray.images = req.files.map((file) => ({
//     data: fs.readFileSync(file.path),
//     contentType: file.mimetype,
//   }))

//   newImageArray
//     .save()
//     .then(() => res.send('Images uploaded successfully'))
//     .catch((err) => res.status(400).send(err))
// })

// mongoose.connect(
//   'mongodb+srv://admin:Vinny123@cluster0.vnhyww8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// )

// app.listen(8000, () => console.log('Server started on port 8000'))

// import express from "express"
// import multer from "multer"
// import mongoose from "mongoose"
// import cors from "cors"

// const app = express()

// app.use(express.json())

// app.use(cors())

// //mongodb connection
// const mongoUrl =
//   'mongodb+srv://admin:Vinny123@cluster0.vnhyww8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log('Connected to database')
//   })
//   .catch((e) => console.log(e))

// //importing schema
// import ImageDetails from "./models/ImageModel.js"



// app.get('/', async (req, res) => {
//   res.send('Success!')
// })

// app.listen(8000, () => {
//   console.log('Server Started')
// })

// //////////////////////////////////////////////////////////////


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../src/images/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now()
//     cb(null, uniqueSuffix + file.originalname)
//   },
// })

// const upload = multer({ storage: storage })

// app.post('/upload-image', upload.single('image'), async (req, res) => {
//   console.log(req.body)
//   const imageName = req.file.filename

//   try {
//     await ImageDetails.create({ image: imageName })
//     res.json({ status: 'ok' })
//   } catch (error) {
//     res.json({ status: error })
//   }
// })

// app.get('/get-image', async (req, res) => {
//   try {
//     ImageDetails.find({}).then((data) => {
//         console.log(data)
//       res.send({ status: 'ok', data: data })
      
//     })
//   } catch (error) {
//     console.log(error.message)
//     res.json({ status: error })
//   }
// })

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const PORT=process.env.PORT || 8500;

const app=express();
app.use(cors());
app.use(express.json({limit:"10mb"}))

const schema= new mongoose.Schema({
    image:String
})

const ImageModel=mongoose.model("Image",schema)



  app.get('/image', async(req, res) => {
    const data=await ImageModel.find({})
    res.json({ message: 'All Images from database sent successfully' ,data:data})
  })

    app.post("/upload",async(req,res)=>{
        const image= new ImageModel({image:req.body.img})
        await image.save()
        console.log(req.body)
        res.send({message:"Image uploaded successfully",success:true})
    })






const mongoUrl =
  'mongodb+srv://admin:Vinny123@cluster0.vnhyww8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database')
  })
  .catch((e) => console.log(e))

app.listen(8500, () => {
  console.log('Server Started at port ' + PORT)
})