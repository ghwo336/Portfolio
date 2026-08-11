import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import { SITE_META } from "@/content/site";

export const metadata: Metadata = SITE_META.en;

export default function HomeEn() {
  return <Portfolio lang="en" />;
}
