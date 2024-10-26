import styles from "@/common/styles/components/app/home.module.scss";
import React from "react";

export const SectionTitle: React.FC<{ title: string; id: string }> = ({
  title,
  id,
}) => {
  return (
    <div className={styles.titleContainer} id={id}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
