
import mongoose from "mongoose";

const ImageDetailsScehma = new mongoose.Schema(
  {
   image:String
  },
  {
    collection: "ImageDetails",
  }
);

const ImageDetails= mongoose.model("ImageDetails", ImageDetailsScehma);

export default ImageDetails