// folderStructure.cjs

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..", ".."); // project root
const OUTPUT_DIR = path.join(ROOT_DIR, "scripts", "scripts_outputs");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "folder_structure.txt");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const excludeFileName = ["node_modules", "dist", ".git"];

const commentMap = {
  services: "reusable logic Layer containing Microservices",
  "userService.js": "user lookup, validation, password check",
  "sessionService.js": "create, refresh, limit sessions",
  "mfaService.js": "send OTP, verify OTP, TOTP",
  "securityService.js": "bot detection, rate limiting",
  "emailService.js": "wrap nodemailer or SES",
};

function generateTree(dir, prefix = "") {
  const items = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => !excludeFileName.includes(item.name));

  if (items.length === 0) return "";

  // 📝 find max name length in this folder
  const maxLength = Math.max(...items.map((item) => item.name.length));

  let result = "";
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    const nextPrefix = prefix + (isLast ? "    " : "│   ");
    const itemPath = path.join(dir, item.name);

    // comment (if exists)
    const comment = commentMap[item.name] ? `# ${commentMap[item.name]}` : "";

    // pad filenames so all comments align
    const paddedName = item.name.padEnd(maxLength + 20, " ");

    result += prefix + pointer + paddedName + (comment ? comment : "") + "\n";

    if (item.isDirectory()) {
      result += generateTree(itemPath, nextPrefix);
    }
  });

  return result;
}

const structure = path.basename(ROOT_DIR) + "/\n" + generateTree(ROOT_DIR);

fs.writeFileSync(OUTPUT_FILE, structure);

console.log(`✅ Folder structure saved to ${OUTPUT_FILE}`);
