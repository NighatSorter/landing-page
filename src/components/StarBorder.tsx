import "@/styles/StarBorder.css";
import type { ComponentPropsWithoutRef, ElementType, ReactNode, CSSProperties } from "react";

type BaseProps<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, "color" | "children" | "className" | "style">;

type StarBorderProps<T extends ElementType = "div"> = BaseProps<T> & {
    as?: T;
    children: ReactNode;
    color?: string;
    speed?: string;
    thickness?: number;
    className?: string;
    style?: CSSProperties;
};

export default function StarBorder<T extends ElementType = "div">({
    as,
    children,
    color = "#0F1A40", // Default glow color
    speed = "5s",
    thickness = 2,
    className = "",
    style,
    ...rest
}: StarBorderProps<T>) {
    const Component = (as ?? "div") as ElementType;

    return (
        <Component
            className={`star-border-container ${className}`}
            {...rest}
            style={{
                padding: thickness,
                ...style,
            }}
        >
            {/* Top glow animation */}
            <div
                className="star-border-effect top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 55%)`,
                    animationDuration: speed,
                }}
            />

            {/* Bottom glow animation */}
            <div
                className="star-border-effect bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 55%)`,
                    animationDuration: speed,
                }}
            />

            {/* Content wrapper */}
            <div className="relative z-10 rounded-full">
                {children}
            </div>
        </Component>
    );
}
