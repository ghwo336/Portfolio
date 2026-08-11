import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Hojae Lee | Web3 Builder",
  description:
    "Hojae Lee speaks on stage, teaches geth internals, and builds regulation-friendly on-chain finance.",
};

export default function HomeEn() {
  return <Portfolio lang="en" />;
}
