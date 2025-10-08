const elasticrun = {
  tenure: "September 2024 – Present",
  role: "Associate Engineer",
  employer: "ElasticRun",
  employerLink: "https://www.elasticrun.com/",
  caseStudySlug: "elasticrun",
  contributions: 
    "At ElasticRun, I led the migration of the internal application Nimbus from Frappe 11 to Frappe 15 within a 30-day deadline, managing deployment pipelines, CI/CD setup, Dockerfile creation, Azure VM provisioning, Kubernetes configurations, and database setup with zero call-outs. I integrated CAS authentication into the Frappe system, improving security and enabling UI/UX enhancements. I optimized a critical API by profiling and rewriting slow functions, reducing response time from 40 seconds to under 1 second. I implemented granular data masking, encryption, and role-based access controls for sensitive DocType fields, ensuring compliance with data protection standards. I also resolved production-critical bugs in Redis caching, email attachments, and broadcasting modules, enhanced MariaDB database efficiency by optimizing queries for deleting millions of rows daily, and automated deployment workflows by developing product requests for image migration and bench command execution.",
  techStack: [
    "Frappe", "Python", "JavaScript", "React", "MariaDB", "Redis", "Docker", "Kubernetes", "Azure", "CI/CD",
  ],
  hyperlinks: [
    { icon: "clip", label: "ElasticRun Website", link: "https://www.elasticrun.com/" },
    { icon: "globe", label: "Azure Cloud Infrastructure", link: null },
    { icon: "clip", label: "Nimbus Application", link: null },
  ],
};

const nic = {
  tenure: "May 2021 – July 2021",
  role: "Front-End Web Developer Intern",
  employer: "National Informatics Centre (NIC)",
  employerLink: "https://raj.nic.in/",
  caseStudySlug: "nic",
  contributions: 
    "During my internship at NIC, I developed and maintained web applications using HTML, CSS (Bootstrap), and JavaScript, contributing to a 20% increase in user engagement. I resolved UI/UX issues and implemented responsive design enhancements, resulting in a 15% improvement in mobile user experience. I also integrated front-end modules with backend systems using RESTful APIs, enhancing data flow and system functionality.",
  techStack: [
    "HTML", "CSS", "Bootstrap", "JavaScript", "RESTful APIs",
  ],
  hyperlinks: [
    { icon: "clip", label: "NIC Rajasthan", link: "https://raj.nic.in/" },
    { icon: "globe", label: "Government Web Portal", link: null },
  ],
};


export const experienceContent = () => {
  return {
    elasticrun,
    nic,
  };
};
