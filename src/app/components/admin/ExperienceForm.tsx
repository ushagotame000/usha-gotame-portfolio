import { experienceService } from "@/services/experienceService";
import React, { useState } from "react";

// Define a type for the experience form data
interface ExperienceFormData {
  title: string;
  jobType: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const ExperienceForm: React.FC = () => {
  // Set the state with proper typing for formData
  const [formData, setFormData] = useState<ExperienceFormData>({
    title: "",
    jobType: "",
    company: "",
    duration: "",
    location: "",
    description: "",
    achievements: [],
    technologies: [],
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await experienceService.create(formData); 
      alert("Experience added successfully!");
    } catch (error) {
      console.error("Error adding experience:", error);
      alert("Failed to add experience");
    }
  };

  return (
    <div className="bg-background/50 backdrop-blur-sm border-border/50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Title input */}
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          {/* Job Type input */}
          <div>
            <label>Job Type</label>
            <input
              type="text"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Company input */}
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Duration input */}
          <div>
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Location input */}
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Description input */}
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Achievements input */}
          <div>
            <label>Achievements</label>
            <textarea
              name="achievements"
              value={formData.achievements.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  achievements: e.target.value
                    .split(",")
                    .map((item) => item.trim()),
                }))
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Technologies input */}
          <div>
            <label>Technologies</label>
            <textarea
              name="technologies"
              value={formData.technologies.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  technologies: e.target.value
                    .split(",")
                    .map((item) => item.trim()),
                }))
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit Experience
        </button>
      </form>
    </div>
  );
};
