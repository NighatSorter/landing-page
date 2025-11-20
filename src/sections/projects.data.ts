import datesAppImg from "@/assets/dates-app.png";
import palmAppImg from "@/assets/palm-app.png";

export type ProjectMeta = {
  id: "date-ai" | "palm-ai";
  href: string;
  imageSrc: string;
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    id: "date-ai",
    href: "/date-classification",
    imageSrc: datesAppImg,
  },
  {
    id: "palm-ai",
    href: "/palm-classification",
    imageSrc: palmAppImg,
  },
];
