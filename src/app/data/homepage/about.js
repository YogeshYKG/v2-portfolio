const paras = {
  firstpara: `I’m a full-stack engineer passionate about building scalable,
user-focused web applications that balance clean design with robust
engineering. I love working across the stack, from crafting reusable
front-end components to optimizing back-end APIs and databases for
performance and reliability.`,
  secondpara: `Currently, I’m a Fullstack Developer at Techbinary (Blueberry Groups),
where I lead development of role-based CRMs , high-traffic travel platforms , and Internal SaaS systems. My work spans scaling applications
to handle millions of requests, reducing turnaround times through
automation, and improving developer velocity with component libraries
and optimized workflows.`,
  thirdpara: `Previously, I was a consultant at Virtual Diamond Boutique, where I
architected a 3D jewelry configurator, implemented micro-frontend
architectures, and productized SaaS modules adopted by hundreds of B2B
clients. I’ve also contributed to government projects during my time at
NIC as a database architect intern.`,
  fourthpara: `Beyond professional work, I’ve delivered multiple web projects across
travel, retail, and HR domains, and I enjoy tackling algorithmic
challenges—having solved 250+ DSA problems on LeetCode.`,
  fifthpara: `Outside of coding, you’ll likely find me solving puzzles, playing chess,
skating, or ping into bug bounty hunts.`,
};

const hyperlinks = {
  "Techbinary (Blueberry Groups)": "https://newtesting.blueberry-travel.com/",
  "high-traffic travel platforms": "https://www.nextholidays.com/",
  "role-based CRMs": "https://spjsmartcare.thespj.com/",
  "Internal SaaS systems":
    "https://uat.bges.blueberrygroup.org/master/ess/dashboard",
  "Virtual Diamond Boutique": "https://vdbapp.com/",
  NIC: "https://raj.nic.in/",
  LeetCode : "https://leetcode.com/u/user4816XH/",
};

export const aboutContent = () => {
  return {
    paras,
    hyperlinks,
  };
};
