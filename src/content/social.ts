export const social = [
  { url: "mailto:sunshihao0122@163.com", name: "mail" },
  { url: "https://github.com/sunshihao0122", name: "github" },
  //{ url: "https://www.linkedin.com/in/", name: "linkedin" },
  //{ url: "https://x.com/", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
