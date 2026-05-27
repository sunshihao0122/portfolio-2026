import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn 帮助小团队通过连续打卡和简单签到的方式坚持每日习惯。<br/><br/>应用以低交互门槛、移动端优先和轻社交功能为设计理念，技术栈采用 Next.js、Node.js、PostgreSQL 和 Redis。",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "个人与团队打卡",
        caption: "个人与团队打卡",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "打卡进度",
        caption: "打卡进度",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "好友互动",
        caption: "好友互动",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "邀请流程",
        caption: "邀请流程",
      },
    },
  ],
} as const satisfies ProjectContent;
