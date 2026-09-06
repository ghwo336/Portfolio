import type { ReactNode } from "react";
import { both, type Localized } from "@/lib/i18n";
import type { CardItem, SectionInfo } from "@/content/types";

export const OSS_SECTION: SectionInfo = {
  id: "opensource",
  chip: "0x03 OPEN SOURCE",
  title: { ko: "오픈소스 기여", en: "Open Source" },
};

const GETH_PRS_URL =
  "https://github.com/ethereum/go-ethereum/pulls?q=is%3Apr+author%3Aghwo336";

export const OSS_LEAD: Localized<ReactNode> = {
  ko: (
    <>
      BAY 18기 개발팀 온보딩용 geth 강의를 준비하며 코드를 읽다가 발견한
      문제들을 go-ethereum에 PR로 보냈고, 3건 모두 코어 개발자 리뷰를 거쳐
      머지되었습니다.{" "}
      <a href={GETH_PRS_URL} target="_blank" rel="noopener noreferrer">
        전체 PR 보기
      </a>
    </>
  ),
  en: (
    <>
      Bugs I found reading the go-ethereum (geth) code while preparing the
      onboarding lectures for BAY&apos;s 18th-cohort dev team, sent upstream as
      pull requests. All three were reviewed by a core developer and merged.{" "}
      <a href={GETH_PRS_URL} target="_blank" rel="noopener noreferrer">
        All PRs
      </a>
    </>
  ),
};

const MERGED = { kind: "merged" as const, label: { ko: "머지됨", en: "Merged" } };

export const OSS: CardItem[] = [
  {
    title: { ko: "Holesky 테스트넷 제거", en: "Remove the Holesky testnet" },
    tag: MERGED,
    meta: both("GO-ETHEREUM #35591, 19 FILES, MERGED 2026.08"),
    body: {
      ko: "2025년 하반기에 수명이 끝난 Holesky 테스트넷을 geth 코드베이스에서 걷어냈습니다. Pectra 이후 대규모 inactivity leak으로 검증자 exit queue가 1년 넘게 밀려 검증자 라이프사이클 테스트에 쓸 수 없게 됐고, DNS 디스커버리 트리마저 내려가 --holesky로 띄운 노드는 피어를 찾지 못한 채 조용히 돌아가는 상태였습니다. CLI 프리셋과 datadir 처리, 체인 설정과 제네시스 할당, 부트노드, 비콘 라이트 클라이언트 설정, 로그 인덱스 체크포인트까지 19개 파일에서 제거하고 문서를 Sepolia와 Hoodi로 옮겼습니다. 기존 Holesky datadir과 하위 Go 프로젝트에 미치는 영향을 분석해 PR에 정리했고, 메인테이너가 범위를 고를 수 있도록 사용자 프리셋 제거와 라이브러리 API 제거를 별도 커밋으로 나눴습니다.",
      en: "Removed the Holesky testnet, which reached end of life in late 2025, from the geth codebase. After Pectra, massive inactivity leaks left a validator exit queue over a year long, so the network could no longer test the validator lifecycle, and with its DNS discovery tree gone a node started with --holesky silently ran without ever finding peers. Removed the CLI preset and datadir handling, chain config and genesis allocation, bootnodes, beacon light client config and log index checkpoints across 19 files, and pointed the docs at Sepolia and Hoodi. Analyzed the impact on existing Holesky datadirs and downstream Go consumers in the PR, and split the change into two commits so maintainers could choose between removing only the user-facing preset or the library API as well.",
    },
    links: [
      {
        href: "https://github.com/ethereum/go-ethereum/pull/35591",
        label: both("PR #35591"),
      },
      {
        href: "https://blog.ethereum.org/2025/09/01/holesky-shutdown-announcement",
        label: { ko: "Holesky 종료 공지", en: "Holesky shutdown announcement" },
      },
    ],
  },
  {
    title: {
      ko: "debug_storageRangeAt이 트라이 오류를 숨기던 문제 수정",
      en: "Surface trie errors in debug_storageRangeAt",
    },
    tag: MERGED,
    meta: both("GO-ETHEREUM #35554, MERGED 2026.08"),
    body: {
      ko: "트라이 이터레이터의 Next는 순회가 끝났을 때와 노드를 읽지 못했을 때 모두 false를 돌려주는데, 이 API는 순회 뒤 Err를 확인하지 않아 트라이 오류가 정상 결과처럼 보고됐습니다. 그 경우 NextKey까지 nil이 되어 '마지막 키까지 모두 돌려줬다'는 잘못된 페이지네이션 의미가 호출자에게 전달됐습니다. dbcmd, snapshot과 pathdb 제너레이터 등 다른 트라이 이터레이터 사용처와 같은 방식으로 이터레이터 오류를 그대로 반환하도록 고쳤습니다.",
      en: "The trie iterator's Next returns false both when the range is exhausted and when a node cannot be resolved, but the API never checked Err afterwards, so a trie failure was reported as a normal result. Worse, NextKey came back nil, which the response format defines as 'the last key is included', telling callers a truncated range was complete. Fixed it to return the iterator's error, matching how other trie iterator consumers such as dbcmd and the snapshot and pathdb generators already handle it.",
    },
    links: [
      {
        href: "https://github.com/ethereum/go-ethereum/pull/35554",
        label: both("PR #35554"),
      },
    ],
  },
  {
    title: {
      ko: "debug_executionWitness nil 포인터 패닉 수정",
      en: "Fix nil-pointer panic in debug_executionWitness",
    },
    tag: MERGED,
    meta: both("GO-ETHEREUM #35544, MERGED 2026.08, FIRST PR"),
    body: {
      ko: "존재하지 않는 블록 해시로 호출하면 RPC 스펙대로 BlockByNumberOrHash가 블록도 오류도 없이 (nil, nil)을 돌려주는데, 오류만 검사하고 block.ParentHash()를 역참조해 RPC 고루틴이 패닉했습니다. 같은 파일의 StorageRangeAt이 이미 쓰던 nil 가드를 적용하고, 알 수 없는 해시로 호출하면 패닉 대신 오류를 돌려주는지 확인하는 회귀 테스트를 추가했습니다. geth에 처음으로 머지된 PR입니다.",
      en: "Calling it with an unknown block hash made BlockByNumberOrHash return (nil, nil) as the RPC spec requires, but the method only checked the error and then dereferenced block.ParentHash(), panicking the RPC serving goroutine. Applied the same nil guard that StorageRangeAt in the same file already used, and added a regression test asserting an error instead of a panic for an unknown hash. My first merged PR in geth.",
    },
    links: [
      {
        href: "https://github.com/ethereum/go-ethereum/pull/35544",
        label: both("PR #35544"),
      },
    ],
  },
];
