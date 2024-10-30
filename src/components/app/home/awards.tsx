"use client";
import { Award } from "@/common/types/award";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styles from "@/common/styles/components/app/home.module.scss";

import WorkIcon from "@mui/icons-material/Work";

import { ICONS } from "@/components/utils/icons";
import { COLORS } from "@/components/utils/colors";

export const AwardsSectionComponent: React.FC<{ awardList: Award[] }> = ({
  awardList,
}) => {
  return (
    <div className={styles.awards}>
      <VerticalTimeline
        className={styles.awardsTimeline}
        layout={"1-column-left"}
      >
        {awardList.map((award, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className={styles.awardCard}
              contentStyle={{
                background: COLORS[award.category],
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid  ${COLORS[award.category]}`,
              }}
              date={award.dateStr}
              dateClassName={styles.date}
              iconStyle={{
                background: `${COLORS[award.category]}`,
                color: "#fff",
              }}
              icon={ICONS[award.category]}
            >
              <h3
                className={[
                  "vertical-timeline-element-title",
                  styles.title,
                ].join(" ")}
              >
                {award.name}
              </h3>
              <h4
                className={[
                  "vertical-timeline-element-subtitle",
                  styles.subtitle,
                ].join(" ")}
              >
                {award.orgName}
              </h4>
              <p className={styles.description}>{award.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
