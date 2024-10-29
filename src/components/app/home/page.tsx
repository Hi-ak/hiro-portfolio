"use client";
import React, { useEffect, useRef, useState } from "react";

import styles from "@/common/styles/components/app/home.module.scss";

import Image from "next/image";
import { ProjectCard } from "@/components/cards/projectCard";
import { SectionTitle } from "@/components/layouts/sectionTitle";
import { PhotoStyle, Project } from "@/common/types/project";

export const HomePageComponent: React.FC<{}> = ({}) => {
  /*
  const [typedMotto, setTypedMotto] = useState("");

  const typeSec = 6000.0;
  const mottoList = ["Problem solving", "Friends", "Learning"];

  let delay = typeSec / mottoList[0].length;

  console.log(delay);
  let mottoIndex = 0;
  let motto = mottoList[mottoIndex]; //現在表示中の
  let index = 0;

  const updateTypedMotto = () => {
    index++;
    if (index < motto.length) {
      setTypedMotto(motto.substring(0, index));
      setTimeout(updateTypedMotto, delay);
    } else {
      if (index >= 2 * motto.length) {
        //mottoのホールドが終わったら
        mottoIndex += 1;
        motto = mottoList[mottoIndex];
        index = 0;
        delay = typeSec / motto.length;
        setTimeout(updateTypedMotto, delay);
        setTypedMotto("");
        return;
      }
      setTypedMotto(motto);
      setTimeout(updateTypedMotto, delay);
    }
  };

  setTimeout(updateTypedMotto, delay); //着火
  */

  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <div className={styles.about}>
          <div className={styles.photoContainer}>
            <div className={styles.photo}>
              <img src="/photos/ny.jpeg" alt="Profile Pic" />
            </div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <h1 className={styles.name}>Hiroyuki Akiyama</h1>
              <div className={styles.motto}>Develop Web & Game for</div>
              <div className={styles.typing}>Problem solving</div>
            </div>
          </div>
        </div>

        <SectionTitle title="Projects" id="projects" />

        <div className={styles.projectsContainer}>
          {ProjectList.map((proj) => {
            return (
              <ProjectCard
                key={proj.name}
                proj={proj as Project}
                isSmall={
                  proj.name == "Gakushoku.net" || proj.name == "RibbonCakeRun"
                }
              />
            );
          })}
        </div>

        <SectionTitle title="Awards" id="awards" />
      </div>
    </div>
  );
};

const ProjectList = [
  {
    name: "Gakushoku.net",
    description:
      "Mobile ticket app for my school cafeteria, eliminating the waiting time for purchasing meal tickets. Collaborated with PayPay and Avant Corporation. ",
    photoUrl: "projPhotos/GakushokuNet.png",
    photoStyle: PhotoStyle.InScreen,
  },
  {
    name: "Azure Runner",
    description:
      "3D online action game. Explore battlefields, beat slimes, and find crystals!",
    photoUrl: "projPhotos/AzureRunner.png",
    photoStyle: PhotoStyle.Bg,
  },
  {
    name: "emocle",
    description:
      "Social Media x Sentiment Analysis. Users can customize and filter negative posts. Patented technology in Japan. (In progress)",
    photoUrl: "projPhotos/Emocle.png",
    photoStyle: PhotoStyle.InScreen,
  },
  {
    name: "RibbonCakeRun",
    description:
      "Move cupcake on a road of ribbons, to reach the farthest. (Similar to Temple Run!)",
    photoUrl: "projPhotos/RibbonCakeRun.png",
    photoStyle: PhotoStyle.Bg,
  },
  {
    name: "Pokeword",
    description:
      "Interleukin, Markovnikov rule, Charles's law. Stuck in a difficult class with overwhelming terms? No worries. We have a definition of EVERY word, within 30 characters.",
    photoUrl: "projPhotos/Pokeword.png",
    photoStyle: PhotoStyle.InScreen,
  },
  {
    name: "PiggyCrash",
    description:
      "Solve puzzles to Defeat piggies! Can you solve it? Oink-oink!",
    photoUrl: "projPhotos/PiggyCrash.png",
    photoStyle: PhotoStyle.Bg,
  },
];
