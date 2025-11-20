import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface FancyHeadingProps {
    children: ReactNode;
    className?: string;
}

const FancyHeading: FC<FancyHeadingProps> = ({ children, className = "" }) => {
    const words = typeof children === "string" ? children.split(/(\s+)/) : [children];

    return (
        <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className={className}
            variants={{
                hidden: { rotate: 3 },
                visible: {
                    rotate: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                },
            }}
        >
            {words.map((word, index) => {
                if (typeof word !== "string") {
                    return (
                        <motion.span
                            key={index}
                            className="inline-block"
                            variants={{
                                hidden: { opacity: 0.1, y: 10, filter: "blur(6px)" },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                    transition: {
                                        duration: 0.55,
                                        ease: "easeOut",
                                        delay: index * 0.08,
                                    },
                                },
                            }}
                        >
                            {word}
                        </motion.span>
                    );
                }

                if (word.trim() === "") {
                    return <span key={index}>{word}</span>;
                }

                return (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={{
                            hidden: { opacity: 0.1, y: 10, filter: "blur(6px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                    delay: index * 0.08,
                                },
                            },
                        }}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.h2>
    );
};

export default FancyHeading;
