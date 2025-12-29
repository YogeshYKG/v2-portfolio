const blueberryTravels = {
  thumbnail: "/thumbnails/BBT_thumbnail.webp",
  title: "Blueberry Travels Website",
  projectLink: "https://blueberrytravel.com/",
  contributions:
    "Unified 30+ branch sites into one, cutting infra costs; integrated 12+ SaaS tools, SEO, multilingual, chatbot, and lead capture.",
  techStack: ["React", "Next.js", "Node", "Express.js", "Azure", "MySQL"],
  milestones: [
    { icon: "globe", label: "30+ Countries", link: "/explore-bbt" },
    {
      icon: "playstore",
      label: "4K+ Downloads",
      link: "https://play.google.com/store/apps/details?id=com.blueberry.travels",
    },
    { icon: "clip", label: "12+ SaaS", link: "/explore-bbt/uae" }, // using clip as generic "work/tool"
    { icon: "language", label: "5+ Languages", link: null },
    { icon: "chatbot", label: "Chatbot", link: null },
    { icon: "leadcapture", label: "Lead Capture", link: null },
  ],
};

const vdb = {
  thumbnail: "/thumbnails/VDB_thumbnail.webp",
  title: "Virtual Diamond Boutique (VDB) Marketplace",
  projectLink: "https://vdbapp.com/",
  contributions:
    "Built a cross-platform jewelry marketplace with customizable signup flows, 800+ filters, and a dynamic 3D configurator supporting 1200+ stone-ring combinations, previews, and seamless checkout — boosting conversions.",
  techStack: ["Angular", "React", "Node", "MongoDB", "Sentry", "AWS"],
  milestones: [
    { icon: "clip", label: "600+ B2B Clients", link: "/explore-bbt" }, // using clip for business
    {
      icon: "playstore",
      label: "4K+ Downloads",
      link: "https://play.google.com/store/apps/details?id=com.blueberry.travels",
    },
    { icon: "configurator", label: "Ring Configurator", link: null },
    { icon: "language", label: "18+ Languages", link: null },
    { icon: "currency", label: "Currency Converter", link: null },
    { icon: "clip", label: "White-Label Support", link: null }, // clip again for generic tool/business
  ],
};

const hrms = {
  thumbnail: "/thumbnails/HRMS_thumbnail.webp",
  title: "Enhanced Internal HRMS",
  projectLink: "https://bges.blueberrygroup.org/",
  contributions:
    "Automated recruitment, attendance, and travel workflows (3k+ employees) with WhatsApp API + email triggers — reducing manual processing by 40%.",
  techStack: ["Angular", "Node", "MySQL", "Jenkins", "Azure"],
  milestones: [
    {
      icon: "clip",
      label: "Project Repository",
      link: "https://github.com/YogeshYKG/NIC-Intern-Work",
    },
    { icon: "timer", label: "Workflow Automation", link: null }, // using timer for efficiency/automation
    { icon: "users", label: "3K+ Employees", link: null }, // you don't have a users icon, clip could also work
    { icon: "chatbot", label: "WhatsApp Integration", link: null }, // closest is chatbot
    { icon: "mail", label: "Email Triggers", link: null },
    { icon: "timer", label: "40% Manual Reduction", link: null }, // timer again for efficiency
  ],
};

export const projectContent = () => {
  return {
    blueberryTravels,
    vdb,
    hrms,
  };
};
