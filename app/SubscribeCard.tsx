import EmailAddressForm from "@/app/EmailAddressForm";
import signupIllustration from "@/public/images/illustration-sign-up-desktop.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SubscribeCard() {
  const infos = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <section className="flex h-[641px] w-[928px] grow rounded-[36px] bg-white  py-[24px] pl-[64px] pr-[24px]">
      <div className="flex flex-col justify-start ">
        <h2 className="mt-[97px] text-[56px] leading-[56px]">Stay updated!</h2>

        <p className="mt-[24px] leading-[24px]">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className="mt-[24px] leading-none">
          {infos.map((info, index) => {
            const marginTopClass = index === 0 ? "mt-0" : "mt-[10px]";

            return (
              <li
                key={index}
                className={cn(
                  "flex h-[24px] items-center before:pr-[16px] before:content-[url('/images/icon-list.svg')]",
                  marginTopClass,
                )}
              >
                <span>{info}</span>
              </li>
            );
          })}
        </ul>

        <EmailAddressForm className="mt-[40px]" />
      </div>
      <Image
        src={signupIllustration}
        alt="Signup Illustration"
        className="ml-[64px]"
      />
    </section>
  );
}
