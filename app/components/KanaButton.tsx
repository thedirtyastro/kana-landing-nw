import React from "react";
import Link from "next/link";

type KanaButtonProps = {
  text?: string;
  color?: "primary" | "secondary";
  href?: string; // ✅ optional link
};

const KanaButton: React.FC<KanaButtonProps> = ({
  text = "Swap Now",
  color = "primary",
  href,
}) => {
  const styles = {
    primary: {
      border: "border-primary-300",
      shadow:
        "shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#0E9384]",
      hoverShadow:
        "hover:shadow-[0px_12px_10px_0px_#00FFFF33,0px_6px_10px_0px_#00000040,0px_6px_0px_0px_#0E9384]",
      textColor: "text-white",
    },
    secondary: {
      border: "border-cyan-600",
      shadow:
        "shadow-[0px_10px_8px_0px_#00FFFF1A,0px_4px_8px_0px_#00000026,0px_5px_0px_0px_#088AB2]",
      hoverShadow:
        "hover:shadow-[0px_12px_10px_0px_#00FFFF33,0px_6px_10px_0px_#00000040,0px_6px_0px_0px_#088AB2]",
      textColor: "text-cyan-600",
    },
  };

  const baseClass = `w-full ${styles[color].textColor} font-extrabold rounded-2xl py-4 px-6 border ${styles[color].border} ${styles[color].shadow} transition-all duration-300 ${styles[color].hoverShadow} hover:cursor-pointer flex items-center justify-center text-lg`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {text}
      </Link>
    );
  }

  return <button className={baseClass}>{text}</button>;
};

export default KanaButton;
