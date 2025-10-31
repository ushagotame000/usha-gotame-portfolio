import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    jobType:{type: String, required:true},
    company: { type: String, required: true },
    duration: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    achievements: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
