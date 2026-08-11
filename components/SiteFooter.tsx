import { CONTACTS } from "@/lib/contacts";
import type { Lang } from "@/lib/i18n";
import {
  IconMail,
  IconGitHub,
  IconX,
  IconTelegram,
  IconLinkedIn,
} from "@/components/icons";

export default function SiteFooter({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <footer>
      <div className="wrap">
        <span className="chip" data-type="0xFF CONTACT"></span>
        <h2>{en ? "Contact" : "연락처"}</h2>
        <div className="foot-links">
          <a href={`mailto:${CONTACTS.email}`}>
            <IconMail /> {CONTACTS.email}
          </a>
          <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer">
            <IconGitHub /> github.com/ghwo336
          </a>
          <a href={CONTACTS.x} target="_blank" rel="noopener noreferrer">
            <IconX /> {CONTACTS.xHandle}
          </a>
          <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
            <IconTelegram /> {CONTACTS.telegramHandle}
          </a>
          <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer">
            <IconLinkedIn /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
