import styles from "@/common/styles/components/cards/skillTag.module.scss";

export const SkillTag: React.FC<{
  skill: string;
}> = ({ skill }) => {
  return (
    <div className={styles.tag}>
      <h3 className={styles.skillName}>{skill}</h3>
    </div>
  );
};
