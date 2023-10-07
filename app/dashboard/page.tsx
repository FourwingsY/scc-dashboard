"use client";

import { fetch } from "@/utils/fetch";
import { useEffectOnce } from "@/utils/useEffectOnce";
import { useState } from "react";
import { sheets_v4 } from "@googleapis/sheets";
const SPREADSHEET_ID = "1EJ5SevlPzhKpfZ0ORcMeTLltSlukUHhKX-9IMEijlME";

interface Row {
  selectedArea: string;
  selectedTimes: string[];
  name: string;
  phone: string;
  agree: string;
  date: Date;
}

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [sheets] = [null];

  useEffectOnce(async () => {
    const data = await fetchSheet(SPREADSHEET_ID);
    const sheets = parseSheets(data.valueRanges ?? []);
    console.log(sheets);
    console.log(
      sheets.flatMap((row, index) => {
        return row;
      })
    );
    setLoading(false);
  });

  return <div>{isLoading ? "LOADING DATA..." : "Got it!"}</div>;
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

function parseRow(row: string[]): Row {
  const selectedArea = row[0];
  const selectedTimes = row
    .slice(1, 12)
    .flatMap((c) => c?.match(/(\d{1,2}\/\d{1,2})/g))
    .filter(notEmpty);
  const name = row[12];
  const phone = row[13];
  const agree = row[14];
  const date = new Date(row.at(-1) as string);
  return { selectedArea, selectedTimes, name, phone, agree, date };
}

export function notEmpty<T>(value: T | undefined | null): value is T {
  return value !== null && value !== undefined;
}
