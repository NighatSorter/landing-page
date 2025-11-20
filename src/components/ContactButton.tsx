import { motion, type HTMLMotionProps } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { hoverLift } from "@/lib/motion";

type ContactButtonProps = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
} & Omit<HTMLMotionProps<"button">, "type" | "className" | "onClick" | "children">;

export function ContactButton({
    label,
    onClick,
    type = "button",
    className = "",
    ...rest
}: ContactButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }
        navigate("/contact");
    };

    return (
        <motion.button
            type={type}
            onClick={handleClick}
            {...hoverLift}
            {...rest}
            className={`
                group inline-flex items-center justify-center rounded-full
                px-6 py-1.5
                text-sm font-medium text-white
                bg-gradient-to-r from-[#7F1CD1] via-[#5b3fd9] to-[#0F1A40]
                border border-white/20
                shadow-[0_6px_18px_rgba(15,23,42,0.18)]
                hover:shadow-[0_8px_22px_rgba(15,23,42,0.22)]
                transition-all duration-300
                ${className}
            `}
        >
            <span className="transition-all duration-300 group-hover:tracking-wide">
                {label}
            </span>
        </motion.button>
    );
}

export default ContactButton;
