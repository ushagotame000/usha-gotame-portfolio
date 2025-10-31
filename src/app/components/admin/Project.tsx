"use client"
import React, { useState } from 'react'
import { ExperienceForm } from './ExperienceForm';
import { ProjectForm } from './ProjectForm';

export const Project = () => {
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <div>
      <div className="flex space-x-4">
        <button
          onClick={() => setShowExperienceForm(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Experience
        </button>
        <button
          onClick={() => setShowProjectForm(true)}
          className="px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Add Project
        </button>
      </div>

      {showExperienceForm && <ExperienceForm />}
      {showProjectForm && <ProjectForm />}
    </div>
  )
}
