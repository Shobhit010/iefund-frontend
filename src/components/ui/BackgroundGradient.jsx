import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}) => {
    return (
        <div
            className={cn(
                "relative group/card p-[1px] overflow-hidden rounded-3xl",
                containerClassName
            )}
        >
            <div
                className={cn(
                    "bg-slate-900 relative z-10 w-full rounded-[22px]",
                    className
                )}
            >
                {children}
            </div>

            <div
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500",
                    "opacity-20 group-hover/card:opacity-100 transition duration-500 blur-xl",
                    animate && "animate-gradient"
                )}
            />
            <div
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500",
                    "opacity-10 group-hover/card:opacity-100 transition duration-500"
                )}
            />
        </div>
    );
};

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col h-[100vh] items-center justify-center bg-slate-950 text-slate-50 transition-bg overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-20 will-change-transform`,
                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>
            </div>
            {children}
        </div>
    );
};
