import { sheets_v4 } from "@googleapis/sheets";
import { fetch } from "@/utils/fetch";
import { useEffectOnce } from "@/utils/useEffectOnce";
import { useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.locale("ko");
dayjs.extend(customParseFormat);
dayjs.extend(utc);

const SPREADSHEET_ID = "1EJ5SevlPzhKpfZ0ORcMeTLltSlukUHhKX-9IMEijlME";

export interface Member {
  source: string; // source sheet name
  selectedArea: string;
  selectedTimes: string[];
  name: string;
  phone: string;
  agree: string;
  registeredDate: string;
}

export default function useData() {
  const [isLoading, setLoading] = useState(true);
  const [members, setMembers] = useState<Member[]>([]);

  useEffectOnce(async () => {
    const data = await fetchSheet(SPREADSHEET_ID);
    const sheets = parseSheets(data.valueRanges ?? []);
    setMembers(sheets.flatMap((sheet, i) => sheet.map((row) => ({ ...row, source: `${i}` }))));
    setLoading(false);
  });
  return { isLoading, members };
}

async function fetchSheet(sheetsId: string) {
  const data: sheets_v4.Schema$BatchGetValuesResponse = await (await fetch(`/gapi/sheets?id=${sheetsId}`)).json();
  return data;
}

function parseSheets(sheets: sheets_v4.Schema$ValueRange[]) {
  return sheets.map(parseSheet);
}

function parseSheet(sheet: sheets_v4.Schema$ValueRange) {
  const rows = (sheet.values ?? []).slice(1);
  return rows.map(parseRow);
}

function parseRow(row: string[]): Omit<Member, "source"> {
  const selectedArea = parseArea(row[0]);
  const selectedTimes = row
    .slice(1, 12)
    .flatMap((c) => c?.match(/(\d{1,2}\/\d{1,2})/g))
    .filter(notEmpty);
  const name = row[12];
  const phone = row[13];
  const agree = row[14];
  const date = dayjs.utc(row.at(-1), "YYYY. M. D. a h:mm:dd");
  return { selectedArea, selectedTimes, name, phone, agree, registeredDate: date.toISOString() };
}

export function notEmpty<T>(value: T | undefined | null): value is T {
  return value !== null && value !== undefined;
}

function parseArea(area: string) {
  const map: Record<string, string> = {
    "서울 마포구 (홍대입구역 등)": "마포",
    "서울 은평구 (연신내역 등)": "은평",
    "서울 강남구 (강남역 등)": "강남",
    "인천 부평/남동구 (부평역 등)": "부평남동",
    "서울 서대문구 (신촌역 등)": "서대문",
    "서울 성동구 (성수역 등)": "성동",
    "경기 성남시 (서현역 등)": "성남",
    "서울 용산구 (용산역 등)": "용산",
    "서울 관악구 (서울대입구역 등)": "관악",
    "경기 부천시 (부천역 등)": "부천",
    "서울 도봉구 (쌍문역 등)": "도봉",
  };
  return map[area] ?? "";
}
