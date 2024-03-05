import React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={cn(
        "btn-bg-vermillion-gradient h-[56px] rounded-[8px] bg-dark-navy font-bold text-white",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
