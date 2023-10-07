import fs from "fs/promises";
import axios from "axios";

// fetch from https://docs.google.com/spreadsheets/d/1EJ5SevlPzhKpfZ0ORcMeTLltSlukUHhKX-9IMEijlME
const SPREADSHEET_ID = "1EJ5SevlPzhKpfZ0ORcMeTLltSlukUHhKX-9IMEijlME";
const SHEET_NAME = "1";

const syncSheet = async () => {
  const sheet = await fetchSheet(SPREADSHEET_ID, SHEET_NAME);
  const jsonData = parseSheet(sheet);
  // for (const locale of Object.keys(jsonData)) {
  //   await saveAsJson(locale, jsonData[locale]);
  // }
};

syncSheet();

/*============ steps ============*/
async function fetchSheet(sheetsId, sheetName) {
  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${sheetsId}/gviz/tq?tqx=out:json&headers=1&sheet=${sheetName}`;
  const response = await axios.get(spreadsheetUrl);
  const responseText = response.data
    .replace(/(^\/\*.*\*\/\s)/g, "")
    .replace(/(google\.visualization\.Query\.setResponse\(|\);)/g, "");
  const responseJson = JSON.parse(responseText);
  return responseJson.table;
}

function parseSheet(sheet) {
  console.log(sheet.rows, sheet.cols);

  // const keyIndex = sheet.cols.findIndex(col => col.label === 'web_key');

  // const templates = { ko: {}, en: {}, ja: {} };
  // sheet.rows.forEach(row => {
  //   const webKey = row.c[keyIndex]?.v ?? '';
  //   if (!webKey) return;

  //   const [namespace, group, key] = webKey.split('.');
  //   for (const locale of ['ko', 'en', 'ja']) {
  //     if (!key) continue;
  //     const textIndex = sheet.cols.findIndex(col => col.label === locale);
  //     templates[locale][namespace] = templates[locale][namespace] ?? {};
  //     templates[locale][namespace][group] = templates[locale][namespace][group] ?? {};
  //     templates[locale][namespace][group][key] = formatText(row.c[textIndex]?.v) ?? '';
  //   }
  // });

  // return templates;
}

/* 다국어 처리 라이브러리가 핸들링할 수 있게 변환하기 */
function formatText(text) {
  // return text.replace(/\\n/g, '<br></br>')
  return text;
}

async function saveAsJson(locale, json) {
  return fs.writeFile(`./i18n/${locale}.json`, JSON.stringify(json, null, 2));
}
