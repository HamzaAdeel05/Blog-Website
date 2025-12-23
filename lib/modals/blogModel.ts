// blogModel.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String, // Cloudinary URL
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
