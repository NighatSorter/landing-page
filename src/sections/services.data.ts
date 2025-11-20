import type { ComponentType } from "react";
import {
  BadgeCheck,
  Trees,
  CheckCircle2,
  Eye,
  Scan,
  ShieldCheck,
  Users,
  Radar,
  Building2,
} from "lucide-react";

export type CategoryId = "sorting" | "inspection" | "security";

export type ServiceCategoryMeta = {
  id: CategoryId;
  items: Array<{ icon: ComponentType<{ className?: string }> }>;
};

export const SERVICE_CATEGORIES: ServiceCategoryMeta[] = [
  {
    id: "sorting",
    items: [{ icon: BadgeCheck }, { icon: Trees }, { icon: CheckCircle2 }],
  },
  {
    id: "inspection",
    items: [{ icon: Eye }, { icon: Scan }, { icon: ShieldCheck }],
  },
  {
    id: "security",
    items: [{ icon: Users }, { icon: Radar }, { icon: Building2 }],
  },
];
