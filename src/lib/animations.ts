import type { MotionProps, Variants } from "framer-motion";

const DEFAULT_DURATION = 0.5;
const DEFAULT_EASE: readonly [number, number, number, number] = [0.4, 0, 0.2, 1];
const DEFAULT_VIEWPORT_AMOUNT = 0.3;

type InViewConfig = {
  delay?: number;
  amount?: number;
  duration?: number;
  ease?: string | number[];
};

const inView = (
  initial: MotionProps["initial"],
  animate: MotionProps["whileInView"],
  config: InViewConfig = {}
): MotionProps => ({
  initial,
  whileInView: animate,
  viewport: { once: true, amount: config.amount ?? DEFAULT_VIEWPORT_AMOUNT },
  transition: {
    duration: config.duration ?? DEFAULT_DURATION,
    ease: config.ease ?? DEFAULT_EASE,
    delay: config.delay ?? 0,
  },
});

export const fadeInUp = (delay = 0, distance = 28, amount?: number): MotionProps =>
  inView(
    { opacity: 0, y: distance },
    { opacity: 1, y: 0 },
    { delay, amount }
  );

export const fadeIn = (delay = 0, amount?: number): MotionProps =>
  inView({ opacity: 0 }, { opacity: 1 }, { delay, amount });

export const blurFadeIn = (delay = 0, amount?: number): MotionProps =>
  inView(
    { opacity: 0, y: 16, filter: "blur(10px)" },
    { opacity: 1, y: 0, filter: "blur(0px)" },
    { delay, amount }
  );

export const scaleIn = (delay = 0, amount?: number): MotionProps =>
  inView(
    { opacity: 0, scale: 0.94 },
    { opacity: 1, scale: 1 },
    { delay, amount }
  );

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  delay = 0,
  distance = 36,
  amount?: number
): MotionProps => {
  const isHorizontal = direction === "left" || direction === "right";
  const offset = isHorizontal
    ? { x: direction === "left" ? -distance : distance }
    : { y: direction === "up" ? distance : -distance };
  const target = isHorizontal ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return inView(
    { opacity: 0, ...offset },
    target,
    { delay, amount }
  );
};

type StaggerConfig = {
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
};

export const staggerContainer = (config: StaggerConfig = {}): MotionProps => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: config.amount ?? DEFAULT_VIEWPORT_AMOUNT },
  variants: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: config.delayChildren ?? 0,
        staggerChildren: config.staggerChildren ?? 0.12,
      },
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DEFAULT_DURATION, ease: DEFAULT_EASE },
  },
};

export const pageFade: MotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: DEFAULT_EASE },
};
