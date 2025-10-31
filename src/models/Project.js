import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: "Web App" },
  description: { type: String, required: true },
  technologies: { type: [String], default: [] },
  features: { type: [String], default: [] },
  imageUrl: { type: String, required: true },
  codeLink: { type: String, default: "" },  
  liveLink: { type: String, default: "" },  
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", projectSchema);
