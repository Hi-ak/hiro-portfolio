import styles from "@/common/styles/components/layouts/header.module.scss";

export const HeaderLink: React.FC<{
  name: string;
  url: string;
}> = ({ name, url }) => {
  return (
    <div className={styles.link}>
      <h3>
        <a href={url}>{name}</a>
      </h3>
    </div>
  );
};
