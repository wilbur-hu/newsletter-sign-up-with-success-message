"use server";

import { redirect } from "next/navigation";

export async function handleSubscribe(email: String) {
  redirect(`/subscription-confirmed?email=${email}`);
}
