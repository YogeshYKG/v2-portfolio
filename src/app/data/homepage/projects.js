const quizApp = {
  thumbnail: "/thumbnails/quiz_app_thumbnail.webp",
  title: "Quiz Web Application",
  projectLink: "https://github.com/ankitgupta97481/quiz-app",
  contributions:
    "Built a full-stack quiz management system with secure login, quiz creation, and unique access codes. Developed dynamic UI/UX with React and Tailwind CSS, and implemented secure backend via Spring Boot REST APIs with user authentication and quiz data management.",
  techStack: ["React", "Spring Boot", "Tailwind CSS", "REST APIs", "MySQL", "Java"],
  milestones: [
    { icon: "clip", label: "GitHub Repository", link: "https://github.com/ankitgupta97481/quiz-app" },
    { icon: "users", label: "User Authentication", link: null },
    { icon: "clip", label: "Quiz Management", link: null },
    { icon: "code", label: "RESTful APIs", link: null },
    { icon: "globe", label: "Responsive Design", link: null },
  ],
};

const satelliteClassification = {
  thumbnail: "/thumbnails/satellite_thumbnail.webp",
  title: "Satellite Image Classification",
  projectLink: "https://github.com/ankitgupta97481/satellite-image-classification",
  contributions:
    "Developed a deep learning model for land cover classification on the EuroSAT dataset (27,000 images). Achieved over 99% accuracy in classifying 10 distinct land cover types using a fine-tuned Wide ResNet-50 model. Engineered data handling pipelines and utilized PyTorch for efficient processing and training, showcasing backend and machine learning framework skills.",
  techStack: ["Python", "PyTorch", "CNN", "Wide-ResNet50-2", "Google Colab", "NumPy", "Pandas"],
  milestones: [
    { icon: "clip", label: "GitHub Repository", link: "https://github.com/ankitgupta97481/satellite-image-classification" },
    { icon: "clip", label: "99% Accuracy", link: null },
    { icon: "clip", label: "27,000 Images", link: null },
    { icon: "clip", label: "10 Land Cover Types", link: null },
    { icon: "clip", label: "Deep Learning Model", link: null },
  ],
};

export const projectContent = () => {
  return {
    quizApp,
    satelliteClassification,
  };
};
