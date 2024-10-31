import React, { useState } from "react";

import { SocialInfo } from "@/common/types/social";

import styles from "@/common/styles/components/social/socialInfoList.module.scss";

export const SocialInfoListComponent: React.FC<{
  socialList: SocialInfo[];
}> = ({ socialList }) => {
  return (
    <div className={styles.container}>
      {socialList.map((social, index) => (
        <SocialIcon key={index} social={social} />
      ))}
    </div>
  );
};

const SocialIcon: React.FC<{ social: SocialInfo }> = ({ social }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.socialIcon}>
      <button
        onClick={() => {
          location.href = social.profileUrl;
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <img src={social.iconPath} />
        {isHovered ? <p className={styles.caption}>{social.caption}</p> : null}
      </button>
    </div>
  );
};
