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

export interface Row {
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
  const [sheets, setSheets] = useState<Row[]>([]);

  useEffectOnce(async () => {
    const data = await fetchSheet(SPREADSHEET_ID);
    const sheets = parseSheets(data.valueRanges ?? []);
    setSheets(sheets.flatMap((sheet, i) => sheet.map((row) => ({ ...row, source: `${i}` }))));
    setLoading(false);
  });
  return { isLoading, sheets };
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

function parseRow(row: string[]): Omit<Row, "source"> {
  const selectedArea = row[0];
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
