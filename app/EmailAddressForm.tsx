"use client";

import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import React, { useState } from "react";
import { handleSubscribe } from "@/app/submit";
import EmailInput from "@/app/EmailInput";

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
      <EmailInput
        hasError={error.invalidEmail}
        onChange={(email) => {
          setEmail(email);
          setError({ invalidEmail: false });
        }}
      />

      <Button type="submit" className="mt-[24px]">
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
}
