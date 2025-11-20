import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{ className?: string; id?: string }>;

export default function Container({ className = "", id, children }: ContainerProps) {
    return (
        <section
            id={id}
            className={`scroll-mt-28 md:scroll-mt-36 bg-white ${className}`}
        >
            <div className="w-full max-w-[1500px] mx-auto px-4 py-20 md:py-28">
                {children}
            </div>
        </section>
    );
}
