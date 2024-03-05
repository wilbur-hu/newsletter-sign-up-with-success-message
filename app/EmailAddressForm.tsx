"use client";

import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import React, { useState } from "react";
import { handleSubscribe } from "@/app/submit";

export type EmailAddressFormProps = {
  className?: string;
};

export default function EmailAddressForm(props: EmailAddressFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ invalidEmail: false });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Handling submit", email);

    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setError({ invalidEmail: true });
      return;
    }

    setError({ invalidEmail: false });
    await handleSubscribe(email);
  }

  return (
    <form
      className={cn("flex flex-col", props.className)}
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between text-[12px] font-bold leading-[18px]">
        <label className="" htmlFor="tbEmailAddress">
          Email address
        </label>
        {error.invalidEmail && (
          <span className="text-vermillion">Valid email required</span>
        )}
      </div>

      <input
        type="email"
        id="tbEmailAddress"
        placeholder="email@company.com"
        className="mt-[8px] h-[56px] rounded-[8px] border border-solid border-dark-navy/25
                   px-[24px] py-[16px] text-dark-navy focus:border-dark-navy"
        onChange={(e) => {
          console.log("Email changed", e.target.value);
          setEmail(e.target.value);
          setError({ invalidEmail: false });
        }}
      />

      <Button type="submit" className="mt-[24px]">
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
}
