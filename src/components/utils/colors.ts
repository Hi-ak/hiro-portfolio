import { AwardCategory } from "@/common/types/award";

export const COLORS: { [key in AwardCategory]: string } = {
  [AwardCategory.Web]: "rgb(100, 150, 230)", // 明るめのネイビーブルー系
  [AwardCategory.Game]: "rgb(0, 180, 160)", // 明るめのティール系
  [AwardCategory.Business]: "rgb(255, 140, 0)", // 明るめのオレンジ系
  [AwardCategory.Scholastic]: "rgb(100, 200, 100)",
};
