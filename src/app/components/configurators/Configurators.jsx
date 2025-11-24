"use client";

import { useState } from "react";
import ConfiguratorCard from "@/app/components/configurators/ConfiguratorCard";
import styles from "./Configurators.module.css";
import { configuratorContent } from "@/app/data/homepage/configurator";

const Configurators = () => {
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
        <ConfiguratorCard
          key={index}
          status={card.status}
          data={card.data}
          onActivate={() => handleActivate(index)}
        />
      ))}
    </div>
  );
};

export default Configurators;
