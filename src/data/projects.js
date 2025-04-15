// Sample project data
// Categories: 'Software Engineering', 'Data Science', 'Review Papers'

export const projects = [
  {
    id: 1,
    title: 'Portfolio Website (This one!)',
    description: 'A personal portfolio built with Vue 3, Tailwind CSS, and Vite.',
    techStack: ['Vue 3', 'Tailwind CSS', 'Vite', 'JavaScript'],
    category: 'Software Engineering',
    imageUrl: null, // Add image path later if needed, e.g., '/images/portfolio-preview.png'
    links: {
      github: 'https://github.com/your-username/portfolio-new', // Replace with your actual repo link
      // demo: 'https://your-live-demo-url.com'
    }
  },
  {
    id: 2,
    title: 'Customer Churn Prediction',
    description: 'A machine learning model to predict customer churn based on usage patterns.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
    category: 'Data Science',
    imageUrl: null,
    links: {
      github: 'https://github.com/your-username/churn-prediction',
      // pdf: '/papers/churn-prediction-report.pdf'
    }
  },
  {
    id: 3,
    title: 'Review of LLM Architectures',
    description: 'A comprehensive review paper comparing different Large Language Model architectures.',
    techStack: ['LaTeX', 'Academic Research'],
    category: 'Review Papers',
    imageUrl: null,
    links: {
      pdf: '/papers/llm-review.pdf' // Example path
    }
  },
   {
    id: 4,
    title: 'E-commerce Platform Backend',
    description: 'Developed the backend API for a scalable e-commerce platform.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    category: 'Software Engineering',
    imageUrl: null,
    links: {
      github: 'https://github.com/your-username/ecommerce-backend',
    }
  },
  // Add more projects here following the same structure
];

export const categories = ['All', 'Software Engineering', 'Data Science', 'Review Papers'];
