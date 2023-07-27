import React from "react";
import Link from "next/link";

const colors = {
  primary: [
    "bg-[#9E7558] text-white hover:bg-[#9E7558] focus:ring-[#9E7558]/50",
  ],
  secondary: [
    "bg-secondary-400 text-secondary-100 hover:bg-secondary-600 focus:ring-secondary-500/50",
  ],
  dark: [
    "bg-dark-400 text-white shadow-lg hover:border-dark-400 hover:bg-white hover:text-black focus:ring-dark-500/50",
  ],
  yellow: [
    "bg-lemon-curry/90 text-white shadow-lg hover:bg-lemon-curry focus:ring-lemon-curry/50",
  ],
  github: [
    "text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50",
    "px-5 py-2.5 text-center inline-flex items-center",
    "dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30",
    "text-sm font-medium rounded-lg",
  ],
};

interface Props extends React.AllHTMLAttributes<HTMLElement> {
  type?: "link" | "button" | "submit";
  color?: keyof typeof colors;
  href?: string;
}

export default function Button({
  className,
  href = "#",
  type = "link",
  color = "primary",
  children,
  ...props
}: Props) {
  const colorClassnames =
    typeof color === "string" ? colors[color] : colors.primary;

  // Function to join class names conditionally
  function clsx(...classNames: (string | undefined)[]) {
    return classNames.filter(Boolean).join(" ");
  }

  return type === "link" ? (
    <Link href={href}>
      <a
        className={clsx(
          ...colorClassnames,
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={clsx(
        ...colorClassnames,
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
