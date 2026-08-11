export type Lang = "ko" | "en";

/** 언어별로 다른 값을 담는 컨테이너 */
export type Localized<T = string> = { ko: T; en: T };

/** 현재 언어에 맞는 값을 고른다 */
export function pick<T>(lang: Lang, value: Localized<T>): T {
  return value[lang];
}

/** 두 언어에서 동일한 값을 쓸 때 */
export function both<T>(value: T): Localized<T> {
  return { ko: value, en: value };
}
