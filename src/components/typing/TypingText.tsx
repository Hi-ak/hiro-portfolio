import React, { useEffect, useState } from "react";
import styles from "@/common/styles/components/app/home.module.scss";

export const TypingText: React.FC<{
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}> = ({ words, typingSpeed = 150, deletingSpeed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // カーソルを点滅させるためのエフェクト
    const cursorInterval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentWord) {
      // 次の単語に切り替えるための少しの遅延
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayedText === "") {
      // 次の単語に切り替える
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return (
    <div className={styles.typing}>
      {displayedText}
      <span className={styles.cursor}>{cursorVisible && "|"}</span>
    </div>
  );
};
