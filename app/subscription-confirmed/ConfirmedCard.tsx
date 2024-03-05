"use client";

import iconSuccess from "@/public/images/icon-success.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";

export type ConfirmedCardProps = {
  className?: string;
};

export default function ConfirmedCard(props: ConfirmedCardProps) {
  const params = useSearchParams();
  const email = params.get("email") || "invalid";

  return (
    <div className="flex h-[520px] w-[504px] grow flex-col items-stretch  rounded-[36px] bg-white px-[64px]">
      <Image src={iconSuccess} alt={"Success"} className="mt-[48px]" />

      <h2 className="mt-[40px] text-[56px] leading-none">
        Thanks for subscribing!
      </h2>

      <p className="mt-[24px]">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <Button type="button" className="mt-[40px]">
        Dismiss message
      </Button>
    </div>
  );
}
