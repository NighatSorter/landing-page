import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import { pageFade } from "@/lib/animations";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({
  children,
}: PropsWithChildren<PageTransitionProps>) {
  return <motion.div {...pageFade}>{children}</motion.div>;
}
