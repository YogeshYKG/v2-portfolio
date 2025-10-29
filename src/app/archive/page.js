"use client"

import { useRouter } from "next/navigation";
import projectArchive from "@/app/data/archive/projectArchive";
import Icon from "@/app/components/svg/Icon";
import ProjectArchiveTable from "@/app/components/project_archive_table/ProjectArchive";

import styles from "./page.module.css";
export default function Archive() {
  const router = useRouter();
  const { settings, archive_projectdata } = projectArchive;

  return (
    <div className={styles.pageLayout}>
      <div className={styles.container}>
        <header className={styles.headerContent}>
          <section className={styles.headerSection}>
            <div className={styles.breadCrum} onClick={() => router.push("/")}>
              <Icon
                name="arrow"
                size={20}
                color="currentColor"
                rotate={180 + 45}
              />
              {settings.backNameSpace}
            </div>
            <div className={styles.title}>{settings.title}</div>
          </section>
        </header>

        <main className={styles.mainContent}>
          <section id="projects" className={styles.projectTableSection}>
            <ProjectArchiveTable
              tableHeader={settings.columnSetting}
              tableRows={archive_projectdata}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
