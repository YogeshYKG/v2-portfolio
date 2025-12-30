const fs = require("fs");
const path = require("path");

/**
 * SCRIPT LOCATION:
 * src/scripts/generateFolderStructure.cjs
 *
 * PROJECT ROOT = ../../
 */
const ROOT_DIR = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(ROOT_DIR, "src", "scripts", "scripts_outputs");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "project_structure.txt");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Directories / files to exclude
 */
const EXCLUDE = new Set([
  "node_modules",
  ".next",
  ".git",
  ".DS_Store",
  "dist",
  "build",
]);

/**
 * Optional comments per file/folder
 */
const commentMap = {
  services: "reusable logic layer containing microservices",
  "userService.js": "user lookup, validation, password check",
  "sessionService.js": "create, refresh, limit sessions",
  "mfaService.js": "send OTP, verify OTP, TOTP",
  "securityService.js": "bot detection, rate limiting",
  "emailService.js": "wrap nodemailer or SES",
};

function generateTree(dir, prefix = "") {
  let items;

  try {
    items = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((item) => !EXCLUDE.has(item.name));
  } catch {
    return "";
  }

  if (!items.length) return "";

  // Sort: folders first, then files
  items.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  const maxLength = Math.max(...items.map((i) => i.name.length));

  let result = "";

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    const nextPrefix = prefix + (isLast ? "    " : "│   ");
    const itemPath = path.join(dir, item.name);

    const comment = commentMap[item.name] ? `# ${commentMap[item.name]}` : "";

    const paddedName = item.name.padEnd(maxLength + 20, " ");

    result += prefix + pointer + paddedName + (comment ? comment : "") + "\n";

    if (item.isDirectory()) {
      result += generateTree(itemPath, nextPrefix);
    }
  });

  return result;
}

const structure = path.basename(ROOT_DIR) + "/\n" + generateTree(ROOT_DIR);

fs.writeFileSync(OUTPUT_FILE, structure, "utf-8");

console.log(`✅ Full project structure saved to:\n${OUTPUT_FILE}`);
