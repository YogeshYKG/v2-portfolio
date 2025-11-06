const techbinary = {
  tenure: "March 2025 – Present",
  role: "Fullstack Developer",
  employer: "Techbinary · Unit of Blueberry Groups",
  employerLink: "http://blueberrygroupnew.techbinary.net/",
  // caseStudySlug: "techbinary",
  contributions: 
    "At Techbinary, I scaled a role-based CRM to 5k+ DAU with 99.9% uptime, cutting task turnaround by 25%. I built reusable React/MUI libraries that reduced development time by 30%, optimized APIs and databases to handle 1M+ monthly requests with 250ms faster responses, launched a multilingual travel site that improved SEO and lead generation, and delivered an HRMS for 3k+ employees, automating workflows and saving 200+ hours per month.",
  techStack: [
    "React", "Next.js", "MUI", "Node.js", "Express.js", "MongoDB", "MySQL", "SCSS",
  ],
  hyperlinks: [
    { icon: "clip", label: "SPJ SmartCare (Role-based CRM)", link: "https://spjsmartcare.thespj.com/" },
    { icon: "clip", label: "Blueberry Travels Website", link: "https://www.nextholidays.com/" },
    { icon: "clip", label: "Internal HRMS", link: "https://uat.bges.blueberrygroup.org/master/ess/dashboard" },
  ],
};

const vdb = {
  tenure: "Sept 2022 – Feb 2025",
  role: "Consultant",
  employer: "Virtual Diamond Boutique (VDB)",
  employerLink: "https://vdbapp.com/",
  // caseStudySlug: "vdb",
  contributions: 
    "At VDB, I architected a 3D jewelry configurator with 1200+ stone–ring combinations that boosted conversions, introduced micro-frontend architecture for modular development, and productized the signup module into a SaaS component adopted by 400+ B2B clients. I also built deep-linking and advanced search features, integrated secure Shopify storefront flows, and enhanced UI/UX with responsive filters and Sentry monitoring.",
  techStack: [
    "React", "Angular", "Node.js", "Shopify APIs", "Sentry",
  ],
  hyperlinks: [
    { icon: "clip", label: "VDB Platform", link: "https://vdbapp.com/" },
    { icon: "clip", label: "VDB iOS App", link: "https://apps.apple.com/in/app/vdb-virtual-diamond-boutique/id975333789?platform=ipad" },
  ],
};

const nic = {
  tenure: "May 2021 – July 2021",
  role: "Database Architect",
  employer: "National Informatics Center (NIC)",
  employerLink: "https://raj.nic.in/",
  // caseStudySlug: "nic",
  contributions: 
    "During my internship at NIC, I designed and optimized relational database schemas in MySQL for internal government applications and developed basic web modules in PHP, HTML, and CSS, hosted locally with XAMPP.",
  techStack: [
    "MySQL", "PHP", "HTML", "CSS", "XAMPP",
  ],
  hyperlinks: [
    { icon: "clip", label: "NIC Project Repository", link: "https://github.com/YogeshYKG/NIC-Intern-Work" },
  ],
};


export const experienceContent = () => {
  return {
    techbinary,
    vdb,
    nic,
  };
};
