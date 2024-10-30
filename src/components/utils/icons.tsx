import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import { AwardCategory } from "@/common/types/award";

export const ICONS: { [key in AwardCategory]: JSX.Element } = {
  [AwardCategory.Web]: <CodeIcon />,
  [AwardCategory.Game]: <SportsEsportsIcon />,
  [AwardCategory.Business]: <WorkIcon />,
  [AwardCategory.Scholastic]: <SchoolIcon />,
};
