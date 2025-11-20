export type ProjectMeta = {
  id: "date-ai" | "palm-ai";
  href: string;
  imageSrc: string;
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    id: "date-ai",
    href: "/date-classification",
    imageSrc: "/dates-app.png",
  },
  {
    id: "palm-ai",
    href: "/palm-classification",
    imageSrc: "/palm-app.png",
  },
];
