import ConfirmedCard from "@/app/subscription-confirmed/ConfirmedCard";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <ConfirmedCard />;
    </Suspense>
  );
}
