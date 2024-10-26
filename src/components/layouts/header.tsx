"use client";
import React from "react";

import styles from "@/common/styles/components/layouts/header.module.scss";
import { HeaderLink } from "./headerLink";

const linkList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Awards",
    url: "/#awards",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
export const Header = ({}) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        {linkList.map((link) => (
          <HeaderLink key={link.name} name={link.name} url={link.url} />
        ))}
      </div>
    </header>
  );
};
