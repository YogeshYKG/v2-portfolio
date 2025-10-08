const paras = {
  firstpara: `I'm a Full Stack Developer with over 1 year of professional experience, 
specializing in building scalable web applications and optimizing system performance 
using modern frameworks like Frappe, Spring Boot, and React. I combine cloud expertise 
in Azure and AWS with hands-on experience in deep learning and AI, developing 
high-accuracy models using PyTorch and CNNs.`,
  secondpara: `Currently, I'm an Associate Engineer at ElasticRun, where I lead critical 
migrations, optimize API performance, and implement secure data management systems. 
I recently migrated the internal application Nimbus from Frappe 11 to Frappe 15 within 
a 30-day deadline, managing deployment pipelines, CI/CD setup, Kubernetes configurations, 
and database management with zero call-outs. I've also optimized APIs to reduce response 
times from 40 seconds to under 1 second and implemented granular data masking, encryption, 
and role-based access controls for sensitive data.`,
  thirdpara: `I hold a dual degree (M.Tech + B.Tech) in Computer Science from NIT Hamirpur, 
with strong GATE 2024 scores in Computer Science (349) and Data Analytics (339). During my 
internship at National Informatics Centre (NIC), I developed web applications using HTML, 
CSS (Bootstrap), and JavaScript, and integrated front-end modules with backend systems 
using RESTful APIs.`,
  fourthpara: `Beyond professional work, I've built projects like a full-stack Quiz Web 
Application using React and Spring Boot, and a Satellite Image Classification system 
achieving over 99% accuracy using Wide-ResNet50 on the EuroSAT dataset. I'm passionate 
about solving complex algorithmic challenges and continuously learning new technologies.`,
  fifthpara: `I'm dedicated to leveraging full-stack and AI-driven solutions to drive 
innovation, efficiency, and business impact. Feel free to explore my projects and get 
in touch if you'd like to collaborate!`,
};

const hyperlinks = {
  "ElasticRun": "https://www.elasticrun.com/",
  "NIT Hamirpur": "https://nith.ac.in/",
  "National Informatics Centre (NIC)": "https://raj.nic.in/",
  "Quiz Web Application": "https://github.com/ankitgupta97481/quiz-app",
  "Satellite Image Classification": "https://github.com/ankitgupta97481/satellite-image-classification",
};

export const aboutContent = () => {
  return {
    paras,
    hyperlinks,
  };
};
