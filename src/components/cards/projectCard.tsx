import styles from "@/common/styles/components/cards/projectCard.module.scss";
import { PhotoStyle, Project } from "@/common/types/project";

export const ProjectCard: React.FC<{
  proj: Project;
  isSmall: Boolean;
}> = ({ proj, isSmall }) => {
  return (
    <div className={styles.projectCard}>
      {proj.photoStyle == PhotoStyle.Bg ? (
        <div
          className={styles.bgPhoto}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3)), url(${proj.photoUrl})`,
          }}
        ></div>
      ) : null}
      <div className={styles.textContainer}>
        {isSmall ? (
          <div className={`${styles.name} ${styles.name__small}`}>
            {proj.name}
          </div>
        ) : (
          <div className={styles.name}>{proj.name}</div>
        )}

        <div className={styles.description}>{proj.description}</div>
      </div>
      {proj.photoStyle == PhotoStyle.InScreen ? (
        <div className={styles.photoContainer}>
          <div className={styles.photo}>
            <img
              className={styles.projPhoto}
              src={proj.photoUrl}
              alt={proj.name}
            />
            <img className={styles.framePhoto} src="phoneFrame.png" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
