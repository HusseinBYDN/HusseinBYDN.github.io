/*
  PROJECT TEMPLATE

  This file is only a helper.
  It is not used directly by the website.

  To add a new project:
  1. Copy the object below.
  2. Paste it inside the projects array in src/data/projects.js.
  3. Change the values.
*/

export const projectTemplate = {
  id: "new-project-id",
  title: "New Project Title",
  category: "Project Category",
  type: "Course Project",
  status: "Completed",
  date: "Month Year",
  featured: false,
  priority: 9,

  technologies: [
    "Technology 1",
    "Technology 2",
    "Technology 3",
  ],

  shortDescription:
    "One clear sentence explaining what the project does.",

  fullDescription:
    "A longer paragraph explaining the problem, approach, technologies used, and outcome of the project.",

  highlights: [
    "Main achievement or feature.",
    "Technical method used.",
    "Evaluation, deployment, or documentation result.",
  ],

  metrics: [
    {
      label: "Metric Label",
      value: "Metric Value",
    },
  ],

  links: {
    github: "",
    demo: "",
    report: "",
  },
};