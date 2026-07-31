export const personalInfo = {
  name: "Jeevanandan V",
  roles: ["AI & ML Engineer", "Python Developer", "NLP Enthusiast", "LangChain Developer", "Full-Stack AI Builder"],
  location: "Krishnagiri, Tamil Nadu, India",
  email: "jeevanandan026@gmail.com",
  phone: "+91 8248511767",
  linkedin: "https://linkedin.com/in/jeevanandan-v",
  github: "https://github.com/jeevanandan19",
  summary:
    "Computer Science (AI & ML) graduate with a strong foundation in Python, Machine Learning, NLP, and Software Development. Hands-on experience with Python, SQL, Scikit-Learn, and Flask through academic projects and internships. Quick learner with strong analytical and problem-solving skills.",
  resumeLink: "/resume.pdf",
};

// Skills — grouped by category, no percentages, just names
export const skillCategories = [
  {
    label: "Programming Languages",
    icon: "💻",
    color: "teal",
    skills: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    label: "AI & Machine Learning",
    icon: "🧠",
    color: "violet",
    skills: ["Machine Learning", "NLP", "LLMs", "Prompt Engineering", "AI Agents", "RAG Pipelines", "Random Forest", "Decision Trees", "Vector Embeddings", "Semantic Search"],
  },
  {
    label: "Libraries & Frameworks",
    icon: "📦",
    color: "teal",
    skills: ["Scikit-Learn", "Pandas", "NumPy", "Flask", "LangChain", "React", "Node.js"],
  },
  {
    label: "Tools & Platforms",
    icon: "🛠️",
    color: "violet",
    skills: ["Kiro", "Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "SQLite"],
  },
];

// All 5 GitHub repos with original descriptions
export const projects = [
  {
    title: "Smart Livestock Management System",
    description:
      "An AI-powered web platform built with Flask and HTML/CSS/JS that predicts livestock diseases using ML models, detects anomalies in health data, sends automated vaccination alerts, and renders real-time dashboards. Designed to help farmers make data-driven decisions for herd health management.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Scikit-Learn", "ML"],
    github: "https://github.com/jeevanandan19/smart-livestock-management",
    color: "teal",
    icon: "🐄",
  },
  {
    title: "AI Research Assistant Agent",
    description:
      "A Flask-based intelligent agent that ingests research papers, builds a RAG pipeline with vector embeddings and semantic search, and answers natural language queries using LLMs. Features document retrieval, context-aware Q&A, and prompt-engineered responses for academic use.",
    tech: ["Python", "Flask", "LangChain", "LLMs", "RAG", "Vector DB", "Prompt Engineering"],
    github: "https://github.com/jeevanandan19/ai_research_assistant",
    color: "violet",
    icon: "🤖",
  },
  {
    title: "Intelligent Research Paper Summarizer with Novelty Detection",
    description:
      "An NLP application that automatically summarizes research papers and detects novelty by comparing semantic similarity against a reference corpus using transformer models. Includes text preprocessing, TF-IDF keyword extraction, and a scoring engine for identifying unique contributions.",
    tech: ["Python", "NLP", "Transformers", "TF-IDF", "Semantic Similarity", "Scikit-Learn"],
    github: "https://github.com/jeevanandan19/INTELLIGENT-RESEARCH-PAPER-SUMMARIZER-WITH-NOVELTY-DETECTION",
    color: "teal",
    icon: "📄",
  },
  {
    title: "BMI Analysis and Prediction System",
    description:
      "A Jupyter Notebook-based data analysis project that performs exploratory data analysis on BMI datasets, engineers health-related features, and builds classification models to predict BMI categories. Includes visual analytics with Matplotlib and Seaborn for health trend insights.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/jeevanandan19/BMI-Analysis-and-Prediction-System",
    color: "violet",
    icon: "📊",
  },
  {
    title: "Semiconductor Manufacturing Sensor Data Analysis",
    description:
      "An end-to-end data science pipeline analyzing high-dimensional sensor data from semiconductor fabrication. Applies feature selection, handles class imbalance with SMOTE, and trains ensemble classifiers to predict manufacturing pass/fail outcomes — reducing false negatives in quality control.",
    tech: ["Python", "Pandas", "Scikit-Learn", "SMOTE", "Feature Selection", "Jupyter", "EDA"],
    github: "https://github.com/jeevanandan19/Semiconductor-Manufacturing-Sensor-Data-Analysis",
    color: "teal",
    icon: "🔬",
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Jspiders (A Unit of Test Yantra Software Solutions)",
    type: "Bengaluru, Karnataka, India",
    period: "Feb 2026 – Mar 2026",
    points: [
      "Completed comprehensive Java Full Stack development training under Mr. Keshava",
      "Gained hands-on experience in frontend and backend development technologies",
      "Developed full-stack web applications integrating database connectivity and RESTful APIs",
      "Demonstrated strong work ethic and dedication throughout the internship program",
    ],
    icon: "☕",
  },
  {
    role: "Data Science Intern",
    company: "Corizo",
    type: "Remote",
    period: "May 2025 – June 2025",
    points: [
      "Analyzed datasets with 50,000+ records using Python and Pandas",
      "Performed data cleaning and feature engineering to improve model performance",
      "Created insightful Matplotlib visualizations for data storytelling",
      "Conducted comprehensive model evaluation and performance benchmarking",
    ],
    icon: "🧠",
  },
  {
    role: "Placement Coordinator",
    company: "Paavai Engineering College",
    type: "On-Site",
    period: "Sept 2023 – May 2026",
    points: [
      "Managed placement records for 1,500+ students with high accuracy",
      "Generated eligibility reports and conducted thorough data validation",
      "Maintained organized databases via Excel and Google Sheets",
      "Coordinated placement drives and company interactions",
    ],
    icon: "📊",
  },
];

export const education = [
  {
    degree: "B.E. Computer Science (AI & ML)",
    institution: "Paavai Engineering College",
    period: "2022 – 2026",
    score: "CGPA: 8.7 / 10",
    icon: "🎓",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Govt Higher Secondary School Puliyampatti",
    period: "2022",
    score: "79.66%",
    icon: "📚",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "IVL Matric Higher Secondary School",
    period: "2020",
    score: "94.6%",
    icon: "🏫",
  },
];

export const certifications = [
  {
    title: "Data Science with Python",
    issuer: "Certified Course",
    icon: "🐍",
    color: "teal",
  },
  {
    title: "Advanced Excel for Data Analytics",
    issuer: "Certified Course",
    icon: "📊",
    color: "violet",
  },
];
