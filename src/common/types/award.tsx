import React from "react";

export interface Award {
  name?: string | JSX.Element;
  orgName?: string;
  description?: string | JSX.Element;
  category?: AwardCategory;
  dateStr?: string;
  tags?: string[];
}

export enum AwardCategory {
  Web,
  Game,
  Business,
  Scholastic,
}

export const AwardList: Award[] = [
  {
    name: (
      <a href="https://pckoshien.u-aizu.ac.jp/final/2023final.html#result">
        Best Design Prize
      </a>
    ),
    orgName: "Pasokon Koshien by Aizu University",
    description: (
      <span>
        Develop Pokeword, where users can find definitions of terms in 30
        characters. Helped me define difficult terms quickly in biology class.
      </span>
    ),
    category: AwardCategory.Web,
    dateStr: "Aug. - Nov. 2023",
    tags: ["Next.js", "AI"],
  },
  {
    name: (
      <a href="https://www.youtube.com/watch?v=PdpmmH-TvM8">
        Finalist in Japanese Contest, Leader
      </a>
    ),
    orgName: "Diamond Challenge by University of Delaware",
    description:
      "Introduce AgelessEngage, a mobile app for seniors to find jobs using their career skills. Competed as the only non-international school competitior.",
    category: AwardCategory.Business,
    dateStr: "Nov. 2023 - Feb. 2024",
  },

  {
    name: "Semi-finalist",
    orgName: "Appli Koshien Competition 2023",
    description: (
      <span>
        Develop <a href="https://kanjininja.com">Kanjininja.com</a>. Convert
        English names to Japanese Kanji. Share beauty of Kanji with my summer
        program friends. Over 7,000 visitors globally.
      </span>
    ),
    category: AwardCategory.Web,
    dateStr: "Jul. - Sep. 2023",
    tags: ["Python", "Flask"],
  },
  {
    name: (
      <a href="https://www.jfc.go.jp/n/grandprix/result/11th.html">
        Top 100 Business Plan
      </a>
    ),
    orgName: "HS Business Plan Grand Prix by Japan Finance Corporation",
    description: (
      <span>
        Present Digi-Protect, a web service which protects images’ copyrights
        using steganography. Stop plagiarism on digital artworks on social
        media.
      </span>
    ),
    category: AwardCategory.Business,
    dateStr: "Nov. 2023",
  },

  {
    name: (
      <a href="https://u18.awards.cesa.or.jp/qualifying2022/azure-runner/">
        Semi-finalist
      </a>
    ),
    orgName: "Japan Game Award U18",
    description: (
      <span>
        Develop{" "}
        <a href="https://apps.apple.com/app/id1615562233">Azure Runner</a>,
        inspired by my admiration for The Legend of Zelda.
      </span>
    ),
    category: AwardCategory.Game,
    dateStr: "Oct. 2021 - Jul. 2022",
    tags: ["Unity", "ZBrush", "AI"],
  },

  {
    name: "Recipient of Harvard Prize Book",
    orgName: "Harvard Club of Japan",
    description:
      "Nominated for Harvard Prize Book by my school. The award is for bookworms who show their passion and life story with books.",
    category: AwardCategory.Scholastic,
    dateStr: "Mar. 2024",
  },
];
