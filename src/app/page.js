import styles from "./page.module.css";
import Navbar from "@/app/components/navbar/Navbar";
import About from "@/app/components/about/About";
import Experience from "@/app/components/experience/Experience";
import Projects from "@/app/components/projects/Projects";

import Icon from "@/app/components/svg/Icon";

export default function Home() {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <header className={styles.headerContent}>
          <section className={styles.headerSection}>
            <div className={styles.userInfo}>
              <div className={styles.userName}>Yogesh Kr. Gupta</div>

              <div className={styles.userTitle}>Full Stack Developer</div>
              <div className={styles.userProfDesc}>
                I craft end-to-end digital solutions that balance user
                experience, performance, and business impact.
              </div>
            </div>

            {/* ✅ Use Navbar here */}
            <div className={styles.navbar}>
              <Navbar />
            </div>

            <div className={styles.socialIcons}>
              <span>
                <Icon name="github" size={24} color="currentColor" />
              </span>
              <span>
                <Icon name="linkedin" size={24} color="currentColor" />
              </span>
              <span>
                <Icon name="codepen" size={24} color="currentColor" />
              </span>
              <span>
                <Icon name="mail" size={24} color="currentColor" />
              </span>
              <span>
                <Icon name="instagram" size={24} color="currentColor" />
              </span>
            </div>
          </section>
        </header>

        <main className={styles.mainContent}>
          <section id="about" className={styles.mainContentAboutSection}>
            <div className={styles.mainSectionHeading}>ABOUT</div>
            <div className={styles.mainSectionAbout}>
              <About />
            </div>
          </section>

          <section
            id="experience"
            className={styles.mainContentExperienceSection}
          >
            <div className={styles.mainSectionHeading}>EXPERIENCE</div>
            <Experience />
          </section>

          <section id="projects" className={styles.mainContentProjectSection}>
            <div className={styles.mainSectionHeading}>PROJECTS</div>
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
