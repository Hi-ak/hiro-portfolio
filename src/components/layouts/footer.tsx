import styles from "@/common/styles/components/layouts/footer.module.scss";

export const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.description}>
        &copy; Last updated on <span className={styles.bold}>Oct. 2024 </span>
        Hiroyuki Akiyama
      </p>
    </footer>
  );
};
