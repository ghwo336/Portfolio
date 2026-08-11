import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  chip: string;
  title: ReactNode;
  as?: "section" | "footer";
  children: ReactNode;
};

/** 칩 라벨 + 제목이 있는 섹션 프레임. 내용은 children으로 받는다. */
export default function Section({
  id,
  chip,
  title,
  as: Tag = "section",
  children,
}: SectionProps) {
  return (
    <Tag id={id}>
      <div className="wrap">
        <span className="chip" data-type={chip}></span>
        <h2>{title}</h2>
        {children}
      </div>
    </Tag>
  );
}
