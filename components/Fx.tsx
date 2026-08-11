"use client";

import { useEffect } from "react";

/** 스크롤 리빌(.rv → .on)과 섹션 칩 타이핑 애니메이션 */
export default function Fx() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];

    // 스크롤 리빌
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    // 핫리로드/동적 렌더로 새로 생긴 노드도 다시 관찰
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => {
        if (m.type === "attributes" && m.target instanceof HTMLElement) {
          typeChip(m.target);
          return;
        }
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          const el = n as Element;
          const rvs = [
            ...(el.matches(".rv:not(.on)") ? [el] : []),
            ...el.querySelectorAll(".rv:not(.on)"),
          ];
          rvs.forEach((r) => io.observe(r));
          const chips = [
            ...(el.matches(".chip[data-type]") ? [el] : []),
            ...el.querySelectorAll(".chip[data-type]"),
          ];
          chips.forEach((c) => io2.observe(c));
        });
      });
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-type"],
    });

    // 섹션 칩 타이핑 (프리컴파일 주석이 입력되듯)
    // dataset.typed에 마지막으로 타이핑한 텍스트를 저장해서,
    // data-type이 바뀐 채 DOM이 재사용되면(핫리로드 등) 다시 타이핑한다
    const typeChip = (el: HTMLElement) => {
      const txt = el.dataset.type ?? "";
      if (el.dataset.typed === txt) return;
      el.dataset.typed = txt;
      if (reduce) {
        el.textContent = txt;
        el.classList.add("done");
        return;
      }
      el.innerHTML = '<span class="t"></span><span class="cursor"></span>';
      const t = el.querySelector(".t")!;
      let i = 0;
      const tick = () => {
        if (i <= txt.length) {
          t.textContent = txt.slice(0, i);
          i++;
          timers.push(window.setTimeout(tick, 26));
        } else {
          timers.push(window.setTimeout(() => el.classList.add("done"), 900));
        }
      };
      tick();
    };
    const io2 = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            typeChip(e.target as HTMLElement);
            io2.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document
      .querySelectorAll<HTMLElement>(".chip[data-type]")
      .forEach((el) => io2.observe(el));

    return () => {
      io.disconnect();
      io2.disconnect();
      mo.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
