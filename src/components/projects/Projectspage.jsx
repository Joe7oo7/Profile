import React from "react";
import "./Projectspage.css";
const Projectspage = () => {
  const projects = [
    {
      name: "Portfolio",
      framework: "React",
      description: "Modern Responsive Portfolio with built with React.The site features a clean, modern design with responsive layouts for optimal viewing on any device. It includes sections for my skills,bio,and a dedicated project gallery. ",
      link:"https://joe7oo7.github.io/Portfolio"
    },
    {
      name: "Chatbot",
      framework: "Huggingface,Python,Gradio",
      description: "Developed an AI chatbot hosted on Hugging Face Spaces, utilizing a state-of-the-art pre-trained model. The chatbot is capable of natural language understanding and generates human-like responses. ",
      link:"https://huggingface.co/spaces/Joe7oo7/Hugchat"
    },
    {
      name: "AI Sentiment Analyzer",
      framework: "React&Django",
      description: "A web-based sentiment analysis tool designed to evaluate the emotional tone of text input by users.It leverages Django to provide a robust API that analyzes text using TextBlob's sentiment analysis capabilities.",
    
    }
   
  ];
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.name}</h2>
          <h5>{project.framework}</h5>
          <p>{project.description}</p>
          <a href={project.link} class="text-decoration-none text-light project_link ">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Projectspage;
