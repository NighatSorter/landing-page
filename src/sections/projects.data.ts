import datesAppImg from "@/assets/dates-app.png";
import palmAppImg from "@/assets/palm-app.png";
import autoServiceImg from "@/assets/Auto-Sarvice.png";

export type ProjectMeta = {
  id: "date-ai" | "palm-ai" | "auto-service";
  href: string;
  imageSrc: string;
};

export const PROJECTS_META: ProjectMeta[] = [
  {
    id: "auto-service",
    href: "/auto-service",
    imageSrc: autoServiceImg,
  },
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
