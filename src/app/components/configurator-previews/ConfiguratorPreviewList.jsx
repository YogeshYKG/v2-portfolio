"use client";

import { useState } from "react";
import ConfiguratorPreviewCard from "@/app/components/configurator-previews/ConfiguratorPreviewCard";
import styles from "./ConfiguratorPreviewList.module.css";
import { configuratorContent } from "@/app/data/homepage/configurator";

const ConfiguratorPreviewList = () => {
  const { blueberryTravels, vdb, hrms } = configuratorContent();

  const [configuratorsCard, setConfiguratorCard] = useState([
    { data: blueberryTravels, status: false },
    { data: vdb, status: true },
    { data: hrms, status: false },
  ]);

  const handleActivate = (index) => {
    setConfiguratorCard(prev =>
      prev.map((item, i) => ({
        ...item,
        status: i === index
      }))
    );
  };

  return (
    <div className={styles.configuratorWrapper}>
      {configuratorsCard.map((card, index) => (
        <ConfiguratorPreviewCard
          key={index}
          status={card.status}
          data={card.data}
          onActivate={() => handleActivate(index)}
        />
      ))}
    </div>
  );
};

export default ConfiguratorPreviewList;
