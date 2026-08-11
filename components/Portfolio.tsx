import type { Lang } from "@/lib/i18n";
import LangToggle from "@/components/LangToggle";
import Fx from "@/components/Fx";
import LangAttr from "@/components/LangAttr";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Talks from "@/components/Talks";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import History from "@/components/History";
import Press from "@/components/Press";
import SiteFooter from "@/components/SiteFooter";

export default function Portfolio({ lang }: { lang: Lang }) {
  return (
    <>
      <LangToggle lang={lang} />
      <Hero lang={lang} />
      <Intro lang={lang} />
      <Talks lang={lang} />
      <Education lang={lang} />
      <Projects lang={lang} />
      <Community lang={lang} />
      <History lang={lang} />
      <Press lang={lang} />
      <SiteFooter lang={lang} />
      <Fx />
      <LangAttr lang={lang} />
    </>
  );
}
