export interface SocialInfo {
  name: string;
  iconPath: string;
  profileUrl: string;
  caption?: string;
}

export const SOCIAL_INFO_LIST: SocialInfo[] = [
  {
    name: "GitHub",
    iconPath: "social/github.png",
    profileUrl: "https://github.com/hi-ak",
    caption: "GitHub, @Hi-ak",
  },
  {
    name: "Instagram",
    iconPath: "social/instagram.png",
    profileUrl: "https://www.instagram.com/hiroak_ar/",
    caption: "Instagram, @HiroAk_ar",
  },
  {
    name: "Twitter (JP)",
    iconPath: "social/twitter.png",
    profileUrl: "https://twitter.com/masseokkun",
    caption: "Twitter (JP), @masseokkun",
  },
  {
    name: "Facebook",
    iconPath: "social/facebook.png",
    profileUrl: "https://www.facebook.com/profile.php?id=100088409215857",
    caption: "Facebook",
  },
  {
    name: "LinkedIn",
    iconPath: "social/linkedin.png",
    profileUrl: "https://www.linkedin.com/in/akiyama-hiroyuki-5a2a652a4/",
    caption: "LinkedIn",
  },
  {
    name: "YouTube",
    iconPath: "social/youtube.png",
    profileUrl:
      "https://www.youtube.com/@%E5%85%A8%E5%8A%9B%E7%B7%A8%E9%9B%86%E3%82%B0%E3%83%A9%E3%83%95%E3%81%8F%E3%82%93",
    caption: "YouTube Graph-kun",
  },
  {
    name: "Bluesky",
    iconPath: "social/bluesky.png",
    profileUrl: "https://bsky.app/profile/hir.bsky.social",
    caption: "Bluesky",
  },
];
