import React, { useState } from "react";
import { projectService } from "@/services/projectService"; // Import your CRUD service

// Define a type for the project form data
interface ProjectFormData {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
  codeLink: string;
  liveLink: string;
}

export const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    category: "",
    description: "",
    technologies: [],
    features: [],
    imageUrl: "",
    codeLink: "",
    liveLink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await projectService.create(formData);
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project");
    }
  };

  return (
    <div className="bg-background/50 backdrop-blur-sm border-border/50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
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
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
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
          <div>
            <label>Features</label>
            <textarea
              name="features"
              value={formData.features.join(", ")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  features: e.target.value
                    .split(",")
                    .map((item) => item.trim()),
                }))
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label>Code Link</label>
            <input
              type="text"
              name="codeLink"
              value={formData.codeLink}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Live Link</label>
            <input
              type="text"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};
