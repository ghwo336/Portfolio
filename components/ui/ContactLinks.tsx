import { CONTACT_LINKS } from "@/content/contacts";

/** 이메일, GitHub, X, 텔레그램, LinkedIn 링크 목록 */
export default function ContactLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      {CONTACT_LINKS.map(({ href, label, Icon, external }) => (
        <a
          key={href}
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon /> {label}
        </a>
      ))}
    </div>
  );
}
