import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL 粒子",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "一个基于 OGL.js 的 WebGL 实验项目，通过数学公式和噪声函数驱动粒子动画。<br/><br/>粒子在不同的 3D 形状之间平滑过渡，呈现出流畅的视觉效果。",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "粒子动画系统",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "节点形状",
        caption: "节点形状",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "环形形状",
        caption: "环形形状",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "球形形状",
        caption: "球形形状",
      },
    },
  ],
} as const satisfies ProjectContent;
