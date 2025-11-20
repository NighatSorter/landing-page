/**
 * Fade up animation variant for sections
 * @param delay - Delay in seconds (default: 0)
 * @returns Framer Motion variants object
 */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 },
} as const);

/**
 * Hover lift effect for interactive elements
 */
export const hoverLift = {
  whileHover: { y: -2, scale: 1.02 },
  transition: { duration: 0.2, ease: "easeOut" },
} as const;

