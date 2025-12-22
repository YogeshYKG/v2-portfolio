export function generateEmailHTML({
  name = "N/A",
  email,
  message,
  pageURL,
  supportType = "form",
}) {
  const isBug = supportType === "bug";

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
              <td style="padding:24px 28px;background:${
                isBug ? "#7f1d1d" : "#0f172a"
              };color:#ffffff;">
                <h2 style="margin:0;font-size:20px;line-height:1.3;font-weight:600;">
                  Yogesh Kr. Gupta
                </h2>
                <p style="margin:4px 0 0;font-size:13px;line-height:1.45;color:#cbd5f5;">
                  Frontend / MERN Freelance Developer
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px;">

                ${
                  isBug
                    ? `<p style="margin:0 0 10px;font-weight:600;color:#991b1b;">🐞 Bug Report Received</p>`
                    : `<p style="margin:0 0 8px;">Hello,</p>
                       <p style="margin:0 0 12px;">
                         Thank you for reaching out. I’ve received your message and will get back to you shortly.
                       </p>`
                }

                <!-- Message Card -->
                <table width="100%" cellpadding="0" cellspacing="0"
                  style="margin:18px 0;background:#f8fafc;border-radius:8px;border:1px solid #e5e7eb;">
                  <tr>
                    <td style="padding:16px;">
                      <p style="margin:0 0 6px;"><strong style="font-weight:600;">Name:</strong> ${name}</p>
                      <p style="margin:0 0 6px;"><strong style="font-weight:600;">Email:</strong> ${email}</p>
                      <p style="margin:0 0 6px;">
                        <strong style="font-weight:600;">Page:</strong>
                        <a href="${pageURL}" style="color:#2563eb;text-decoration:none;">
                          ${pageURL}
                        </a>
                      </p>
                      <p style="margin:10px 0 4px;"><strong style="font-weight:600;">Message:</strong></p>
                      <p style="margin:0;color:#374151;">
                        ${message}
                      </p>
                    </td>
                  </tr>
                </table>

                ${
                  !isBug
                    ? `
                <p style="margin:0 0 8px;font-size:13px;color:#475569;">
                  Based on your message, here’s a quick overview of the kind of work I usually help clients with:
                </p>
                <ul style="margin:0 0 16px 18px;padding:0;line-height:1.5;">
                  <li>Designing and building production-ready React & Next.js applications</li>
                  <li>Helping startups and businesses turn ideas into reliable web products</li>
                  <li>Developing interactive 3D configurators using Three.js & WebGL</li>
                  <li>Optimizing frontend performance, SEO, and user experience</li>
                  <li>Providing clean code, clear communication, and on-time delivery</li>
                </ul>
                `
                    : ""
                }

                <!-- Portfolio -->
               <h3 style="margin:18px 0 10px;font-size:15px;font-weight:600;">
                    Explore My Work
                </h3>

                <table cellpadding="0" cellspacing="0" width="100%" style="margin:0;">
                    <tr>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            Portfolio
                        </a>
                        </td>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/resume.pdf"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            Resume
                        </a>
                        </td>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/archive"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            Case Studies
                        </a>
                        </td>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/3d-configurator/arm-chair"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            3D · Arm
                        </a>
                        </td>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/3d-configurator/mordern-accent-chair"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            3D · Accent
                        </a>
                        </td>
                        <td align="center" style="padding:6px 2px;">
                        <a href="https://www.yogeshportfolio.in/3d-configurator/winter-jacket"
                            style="display:inline-block;padding:5px 8px;border-radius:6px;
                                    background:#f1f5f9;color:#2563eb;text-decoration:none;
                                    font-size:12px;white-space:nowrap;">
                            3D · Jacket
                        </a>
                        </td>
                    </tr>
                </table>



                <p style="margin:18px 0 0px;">
                  ${
                    isBug
                      ? "Thank you for reporting this issue. It will be reviewed shortly."
                      : "I look forward to discussing how I can help with your project."
                  }
                </p>
                <p style="margin:0 0 16px;font-size:12px;color:#475569;">
                  ${
                    isBug
                      ? "I usually respond within 24–48 hours on business days."
                      : "If additional details are needed, I may reach out via this email."
                  }
                </p>

                <p style="margin:0;">
                  Best regards,<br>
                  <strong style="font-weight:600;">Yogesh Kr. Gupta</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="
                    padding:18px 28px;
                    background:${isBug ? "#7f1d1d" : "#0f172a"};
                    font-size:12px;
                    line-height:1.45;
                    color:#cbd5f5;
                ">

                    <p style="margin:0;">Freelance · Remote · Open to Opportunities</p>
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
