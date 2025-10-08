

import styles from "./page.module.css";
import Navbar from "@/app/components/navbar/Navbar";
import About from "@/app/components/about/About";
import Experience from "@/app/components/experience/Experience";
import Projects from "@/app/components/projects/Projects";
import Credits from "./components/credits/Credits";

import Icon from "@/app/components/svg/Icon";

import userInfo from "./data/homepage/userInfo";

export default function Home() {
  const { userName, userTitle, userProfDesc, links } = userInfo;

  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <header className={styles.headerContent}>
          <section className={styles.headerSection}>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{userName}</div>

              <div className={styles.userTitle}>{userTitle}</div>
              <div className={styles.userProfDesc}>{userProfDesc}</div>
            </div>

            {/* ✅ Use Navbar here */}
            <div className={styles.navbar}>
              <Navbar />
            </div>

            <div className={styles.socialIcons}>
              {links?.github && (
                <a href={links.github} target="_blank">
                  <Icon name="github" size={24} color="currentColor" />
                </a>
              )}
              {links?.linkedin && (
                <a href={links.linkedin} target="_blank">
                  <Icon name="linkedin" size={24} color="currentColor" />
                </a>
              )}
              {links?.codepen && (
                <a href={links.codepen} target="_blank">
                  <Icon name="codepen" size={24} color="currentColor" />
                </a>
              )}
              {links?.mail && (
                <a href={links.mail}>
                  <Icon name="mail" size={24} color="currentColor" />
                </a>
              )}
              {links?.instagram && (
                <a href={links.instagram} target="_blank">
                  <Icon name="instagram" size={24} color="currentColor" />
                </a>
              )}
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

          {/* <section id="projects" className={styles.mainContentProjectSection}>
            <Credits />
          </section> */}

          
        </main>
      </div>
    </div>
  );
}
