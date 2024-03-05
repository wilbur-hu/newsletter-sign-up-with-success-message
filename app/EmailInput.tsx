import React from "react";
import { cn } from "@/lib/utils";

export type EmailInputBoxProps = {
  className?: string;
  hasError: boolean;
  onChange: (value: string) => void;
};
export default function EmailInput(props: EmailInputBoxProps) {
  const inputErrorClass = {
    "border-vermillion": props.hasError,
    "bg-vermillion/15": props.hasError,
  };

  return (
    <>
      <div className="flex justify-between text-[12px] font-bold leading-[18px]">
        <label className="" htmlFor="tbEmailAddress">
          Email address
        </label>
        {props.hasError && (
          <span className="text-vermillion">Valid email required</span>
        )}
      </div>

      <input
        type="email"
        id="tbEmailAddress"
        placeholder="email@company.com"
        className={cn(
          "mt-[8px] h-[56px] rounded-[8px] border border-solid border-dark-navy/25 px-[24px] py-[16px] text-dark-navy focus:border-dark-navy",
          inputErrorClass,
        )}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </>
  );
}
