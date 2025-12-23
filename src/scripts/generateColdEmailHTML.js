export function generateColdEmailHTML({
  recipientName = "there",
  recipientTitle = "",
  companyName = "",
  senderName = "Yogesh Kr. Gupta",
  senderTitle = "Frontend / MERN Developer",
  introMessage = "I help startups and businesses turn ideas into reliable web products using React, Next.js, and Three.js.",
  intentMessage = "I’m reaching out to explore opportunities to contribute to your team and projects.",
  fitPoints = [
    "Designing and building production-ready web applications",
    "Creating interactive 3D configurators using Three.js & WebGL",
    "Optimizing frontend performance, SEO, and user experience",
    "Providing clean code, clear communication, and on-time delivery",
  ],
  portfolioLinks = [
    { label: "Portfolio", url: "https://www.yogeshportfolio.in/" },
    { label: "Resume", url: "https://www.yogeshportfolio.in/resume.pdf" },
    { label: "Case Studies", url: "https://www.yogeshportfolio.in/archive" },
    { label: "3D · Arm", url: "https://www.yogeshportfolio.in/3d-configurator/arm-chair" },
  ],
  ctaMessage = "Would love to discuss how I can contribute to your projects or team.",
  pageURL = "",
  themeColor = "#0f172a",
}) {
  const fitListHTML = fitPoints
    .map((point) => `<li>${point}</li>`)
    .join("");

  const portfolioHTML = portfolioLinks
    .map(
      (link) => `
      <td align="center" style="padding:6px 2px;">
        <a href="${link.url}" 
           style="display:inline-block;padding:5px 8px;border-radius:6px;
                  background:#f1f5f9;color:#2563eb;text-decoration:none;
                  font-size:12px;white-space:nowrap;">
          ${link.label}
        </a>
      </td>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
  <body style="
    margin:0;
    padding:0;
    background:#f4f6f8;
    font-family:Arial,Helvetica,sans-serif;
    font-size:14px;
    line-height:1.55;
    color:#1f2937;
  ">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0"
            style="max-width:640px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td style="padding:24px 28px;background:${themeColor};color:#ffffff;">
                <h2 style="margin:0;font-size:20px;line-height:1.3;font-weight:600;">
                  ${senderName}
                </h2>
                <p style="margin:4px 0 0;font-size:13px;line-height:1.45;color:#cbd5f5;">
                  ${senderTitle}
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 12px;">Hi ${recipientName}${recipientTitle ? `, ${recipientTitle}` : ""},</p>

                <p style="margin:0 0 12px;">
                  ${introMessage}
                </p>

                <p style="margin:0 0 16px;">
                  ${intentMessage}${companyName ? ` at ${companyName}` : ""}.
                </p>

                <p style="margin:0 0 8px;font-size:13px;color:#475569;">
                  Here’s why I believe I could be a strong fit:
                </p>
                <ul style="margin:0 0 16px 18px;padding:0;line-height:1.5;">
                  ${fitListHTML}
                </ul>

                <!-- Portfolio -->
                <h3 style="margin:18px 0 10px;font-size:15px;font-weight:600;">Explore My Work</h3>
                <table cellpadding="0" cellspacing="0" width="100%" style="margin:0;">
                  <tr>
                    ${portfolioHTML}
                  </tr>
                </table>

                <p style="margin:18px 0 12px;">
                  ${ctaMessage}
                </p>

                ${pageURL ? `<p style="margin:0 0 12px;">Reference: <a href="${pageURL}" style="color:#2563eb;text-decoration:none;">${pageURL}</a></p>` : ""}

                <p style="margin:0;">
                  Best regards,<br>
                  <strong style="font-weight:600;">${senderName}</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="
                    padding:18px 28px;
                    background:${themeColor};
                    font-size:12px;
                    line-height:1.45;
                    color:#cbd5f5;
                ">
                    <p style="margin:0;">Open to opportunities · Freelance · Remote</p>
                    <p style="margin:6px 0 0;">
                      <a href="https://github.com/YogeshYKG" style="color:#93c5fd;text-decoration:none;">GitHub</a>
                      &nbsp;·&nbsp;
                      <a href="https://www.linkedin.com/in/yogeshkrgupta/" style="color:#93c5fd;text-decoration:none;">LinkedIn</a>
                      &nbsp;·&nbsp;
                      <a href="mailto:guptayogesh484.dev@gmail.com" style="color:#93c5fd;text-decoration:none;">Email</a>
                    </p>
                </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
