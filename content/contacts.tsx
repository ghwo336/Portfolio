import type { ComponentType } from "react";
import { CONTACTS } from "@/lib/contacts";
import {
  IconMail,
  IconGitHub,
  IconX,
  IconTelegram,
  IconLinkedIn,
} from "@/components/icons";

export type ContactLink = {
  href: string;
  label: string;
  Icon: ComponentType;
  external: boolean;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    href: `mailto:${CONTACTS.email}`,
    label: CONTACTS.email,
    Icon: IconMail,
    external: false,
  },
  {
    href: CONTACTS.github,
    label: "github.com/ghwo336",
    Icon: IconGitHub,
    external: true,
  },
  {
    href: CONTACTS.x,
    label: CONTACTS.xHandle,
    Icon: IconX,
    external: true,
  },
  {
    href: CONTACTS.telegram,
    label: CONTACTS.telegramHandle,
    Icon: IconTelegram,
    external: true,
  },
  {
    href: CONTACTS.linkedin,
    label: "LinkedIn",
    Icon: IconLinkedIn,
    external: true,
  },
];
