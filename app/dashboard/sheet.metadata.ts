type SheetMetadata =
  | { sheetId: string; type: "regional"; target: string; region: string }
  | { sheetId: string; type: "advertise"; target: string }
  | { sheetId: string; type: "b2b"; target: string }
  | { sheetId: string; type: "event"; target: string };

export const sheetsMetadata: SheetMetadata[] = [
  { sheetId: "1", type: "advertise", target: "인스타" },
  { sheetId: "2", type: "advertise", target: "크루" },
  { sheetId: "3", type: "advertise", target: "메타" },
  { sheetId: "7", type: "b2b", target: "제휴" },
  { sheetId: "8", type: "event", target: "리텐션" },
  { sheetId: "9", type: "event", target: "알림설정" },
  { sheetId: "10", type: "event", target: "회원명부" },
  { sheetId: "30", type: "event", target: "친구초대" },
  { sheetId: "4", type: "regional", target: "메타", region: "인천" },
  { sheetId: "5", type: "regional", target: "메타", region: "성남" },
  { sheetId: "6", type: "regional", target: "메타", region: "부천" },
  { sheetId: "11", type: "regional", target: "메타", region: "강남" },
  { sheetId: "12", type: "regional", target: "메타", region: "관악" },
  { sheetId: "13", type: "regional", target: "메타", region: "도봉" },
  { sheetId: "14", type: "regional", target: "메타", region: "마포" },
  { sheetId: "15", type: "regional", target: "메타", region: "서대문" },
  { sheetId: "16", type: "regional", target: "메타", region: "성동" },
  { sheetId: "17", type: "regional", target: "메타", region: "용산" },
  { sheetId: "18", type: "regional", target: "메타", region: "은평" },
  { sheetId: "19", type: "regional", target: "크루", region: "인천" },
  { sheetId: "20", type: "regional", target: "크루", region: "성남" },
  { sheetId: "21", type: "regional", target: "크루", region: "부천" },
  { sheetId: "22", type: "regional", target: "크루", region: "강남" },
  { sheetId: "23", type: "regional", target: "크루", region: "관악" },
  { sheetId: "24", type: "regional", target: "크루", region: "도봉" },
  { sheetId: "25", type: "regional", target: "크루", region: "마포" },
  { sheetId: "26", type: "regional", target: "크루", region: "서대문" },
  { sheetId: "27", type: "regional", target: "크루", region: "성동" },
  { sheetId: "28", type: "regional", target: "크루", region: "용산" },
  { sheetId: "29", type: "regional", target: "크루", region: "은평" },
];

export const meetings = [
  { group: "부평남동", order: 1, date: "10/7", day: "토", location: "예술회관역 - 8번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 2, date: "10/14", day: "토", location: "동암역 - 2번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 3, date: "10/15", day: "일", location: "인천논현역 - 2번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 4, date: "10/21", day: "토", location: "부평시장역 - 1번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 5, date: "10/22", day: "일", location: "모래내시장역 - 1번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 6, date: "10/28", day: "토", location: "만수역 - 4번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 7, date: "10/29", day: "일", location: "부평구청역 - 5번 출구 앞", targetMembers: 8 },
  { group: "부평남동", order: 8, date: "11/4", day: "토", location: "부평역 - 6번 출구 앞", targetMembers: 8 },
  { group: "강화", order: 1, date: "10/12", day: "목", location: "읍내 읍사무소 - 강화여자중학교", targetMembers: 0 },
  { group: "강화", order: 2, date: "10/17", day: "화", location: "읍내 (미정) - 강화여자중학교", targetMembers: 0 },
  { group: "강화", order: 3, date: "10/21", day: "토", location: "읍내 (갑곳리) - 강화여자중학교", targetMembers: 0 },
  { group: "강화", order: 4, date: "11/5", day: "일", location: "교동 또는 읍내 - 강화여자중학교", targetMembers: 0 },
  { group: "용산", order: 1, date: "10/14", day: "토", location: "용산역 - 1번 출구 (용산역 광장)", targetMembers: 8 },
  {
    group: "용산",
    order: 2,
    date: "10/15",
    day: "일",
    location: "신용산역 - 1번 출구 (아모레퍼시픽 본사 앞)",
    targetMembers: 8,
  },
  {
    group: "용산",
    order: 3,
    date: "10/21",
    day: "토",
    location: "한강진역 - 2번 출구 (블루스퀘어 앞)",
    targetMembers: 8,
  },
  { group: "용산", order: 4, date: "10/22", day: "일", location: "삼각지역 - 1번 출구 앞", targetMembers: 8 },
  {
    group: "용산",
    order: 5,
    date: "10/28",
    day: "토",
    location: "효창공원앞역 - 4번 출구 (효창공원앞역 앞 공터)",
    targetMembers: 8,
  },
  {
    group: "용산",
    order: 6,
    date: "10/29",
    day: "일",
    location: "숙대입구역 - 7번 출구 (KB국민은행 남영동지점 앞)",
    targetMembers: 8,
  },
  {
    group: "용산",
    order: 7,
    date: "11/4",
    day: "토",
    location: "신용산역 - 1번 출구 (아모레퍼시픽 본사 앞",
    targetMembers: 8,
  },
  { group: "용산", order: 8, date: "11/5", day: "일", location: "용산역 - 1번 출구 (용산역 광장)", targetMembers: 8 },
  { group: "성남", order: 1, date: "10/7", day: "토", location: "서현역 - 서현역 메가박스 앞", targetMembers: 8 },
  { group: "성남", order: 2, date: "10/8", day: "일", location: "오리역 - 2번 출구 앞", targetMembers: 8 },
  { group: "성남", order: 3, date: "10/14", day: "토", location: "신흥역 - 롯데시네마 앞", targetMembers: 8 },
  { group: "성남", order: 4, date: "10/21", day: "일", location: "모란역 - 11번 출구 우체국 앞", targetMembers: 8 },
  {
    group: "성남",
    order: 5,
    date: "10/29",
    day: "일",
    location: "판교역 - 1번 출구 투썸플레이스 앞",
    targetMembers: 8,
  },
  { group: "성남", order: 6, date: "11/5", day: "일", location: "미금역 - 4번 출구 앞", targetMembers: 8 },
  { group: "관악", order: 1, date: "10/7", day: "토", location: "서울대입구역 - 관악구청 앞", targetMembers: 8 },
  { group: "관악", order: 2, date: "10/8", day: "일", location: "사당역 - 6번 출구 앞", targetMembers: 8 },
  { group: "관악", order: 3, date: "10/15", day: "일", location: "봉천역 - 관악초 정문 앞", targetMembers: 8 },
  {
    group: "관악",
    order: 4,
    date: "10/21",
    day: "토",
    location: "신림역 - 도림천 관천로 문화플랫폼 맞은편",
    targetMembers: 8,
  },
  { group: "관악", order: 5, date: "10/22", day: "일", location: "낙성대역 - 인헌초 정문 앞", targetMembers: 8 },
  { group: "관악", order: 6, date: "10/29", day: "일", location: "서울대벤처타운역 - 1번 출구 앞", targetMembers: 8 },
  { group: "관악", order: 7, date: "11/4", day: "토", location: "서울대입구역 - 관악구청 앞", targetMembers: 8 },
  { group: "관악", order: 8, date: "11/5", day: "일", location: "당곡역 - 삼성스토어 신림점 앞", targetMembers: 8 },
  { group: "부천", order: 1, date: "10/7", day: "토", location: "부천역 - 5번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 2, date: "10/8", day: "일", location: "신중동역 - 1번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 3, date: "10/15", day: "일", location: "역곡역 - 1번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 4, date: "10/21", day: "토", location: "송내역 - 1번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 5, date: "10/22", day: "일", location: "중동역 - 2번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 6, date: "10/29", day: "일", location: "소사역 - 2번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 7, date: "11/4", day: "토", location: "춘의역 - 4번 출구 앞", targetMembers: 8 },
  { group: "부천", order: 8, date: "11/5", day: "일", location: "역곡역 - 1번 출구 앞", targetMembers: 8 },
  { group: "성동", order: 1, date: "10/8", day: "일", location: "왕십리역 - 12번 출구 던킨 옆", targetMembers: 8 },
  { group: "성동", order: 2, date: "10/15", day: "일", location: "성수역 - 4번 출구 스타벅스 앞", targetMembers: 8 },
  { group: "성동", order: 3, date: "10/21", day: "토", location: "성수역 - 4번 출구 스타벅스 앞", targetMembers: 8 },
  { group: "성동", order: 4, date: "10/22", day: "일", location: "뚝섬역 - 1번 출구 블루보틀 앞", targetMembers: 8 },
  { group: "성동", order: 5, date: "10/28", day: "토", location: "서울숲역 - 5번 출구 SM타운 앞", targetMembers: 8 },
  { group: "성동", order: 6, date: "10/29", day: "일", location: "뚝섬역 - 1번 출구 블루보틀 앞", targetMembers: 8 },
  { group: "성동", order: 7, date: "11/4", day: "토", location: "상왕십리역 - 1번 출구 앞", targetMembers: 8 },
  { group: "성동", order: 8, date: "11/5", day: "일", location: "왕십리역 - 12번 출구 던킨 옆", targetMembers: 8 },
  { group: "강남", order: 1, date: "10/7", day: "토", location: "강남역 - 10번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 2, date: "10/8", day: "일", location: "강남역 - 8번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 3, date: "10/14", day: "토", location: "강남역 - 5번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 4, date: "10/15", day: "일", location: "신논현역 - 2번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 5, date: "10/22", day: "일", location: "신논현역 - 8번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 6, date: "10/28", day: "토", location: "신사역 - 8번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 7, date: "10/29", day: "일", location: "역삼역 - 3번 출구 앞", targetMembers: 8 },
  { group: "강남", order: 8, date: "11/4", day: "토", location: "신논현역 - 3번 출구 앞", targetMembers: 8 },
  { group: "마포", order: 1, date: "10/14", day: "토", location: "공덕역 - 8번 출구 앞", targetMembers: 8 },
  { group: "마포", order: 2, date: "10/15", day: "일", location: "홍대입구역 - 4번 출구 앞", targetMembers: 8 },
  {
    group: "마포",
    order: 3,
    date: "10/21",
    day: "토",
    location: "마포역 - 4번 출구 앞 복사꽃어린이공원",
    targetMembers: 8,
  },
  {
    group: "마포",
    order: 4,
    date: "10/22",
    day: "일",
    location: "합정역 - 6번 출구 투썸플레이스 앞",
    targetMembers: 8,
  },
  { group: "마포", order: 5, date: "10/29", day: "일", location: "망원역 - 2번 출구 앞", targetMembers: 8 },
  {
    group: "마포",
    order: 6,
    date: "11/4",
    day: "토",
    location: "이대역 - 2번 출구 앞 대현문화공원",
    targetMembers: 8,
  },
  {
    group: "도봉",
    order: 1,
    date: "10/7",
    day: "토",
    location: "도봉역 - 1번 출구 찻길 반대편 북서울농협 앞",
    targetMembers: 6,
  },
  {
    group: "도봉",
    order: 2,
    date: "10/8",
    day: "일",
    location: "쌍문역 - 2번 출구 삼성쉐르빌퍼스티 앞",
    targetMembers: 8,
  },
  { group: "도봉", order: 3, date: "10/14", day: "토", location: "방학역 - 방학홈플러스 앞", targetMembers: 8 },
  { group: "도봉", order: 4, date: "10/21", day: "토", location: "창동역 - 1번 출구 앞", targetMembers: 8 },
  {
    group: "도봉",
    order: 5,
    date: "10/22",
    day: "일",
    location: "쌍문역 - 2번 출구 삼성쉐르빌퍼스티 앞",
    targetMembers: 8,
  },
  {
    group: "도봉",
    order: 6,
    date: "10/28",
    day: "토",
    location: "쌍문역 - 2번 출구 삼성쉐르빌퍼스티 앞",
    targetMembers: 8,
  },
  { group: "도봉", order: 7, date: "10/29", day: "일", location: "방학역 - 방학홈플러스 앞", targetMembers: 8 },
  { group: "도봉", order: 8, date: "11/4", day: "토", location: "창동역 - 1번 출구 앞", targetMembers: 8 },
  { group: "은평", order: 1, date: "10/7", day: "토", location: "연신내역 - 7번 출구 국민은행 앞", targetMembers: 8 },
  { group: "은평", order: 2, date: "10/8", day: "일", location: "연신내역 - 7번 출구 국민은행 앞", targetMembers: 8 },
  { group: "은평", order: 3, date: "10/21", day: "토", location: "불광역 - 6번 출구 NC백화점 앞", targetMembers: 8 },
  { group: "은평", order: 4, date: "10/22", day: "일", location: "불광역 - 6번 출구 NC백화점 앞", targetMembers: 8 },
  { group: "은평", order: 5, date: "10/28", day: "토", location: "응암역 - 3번 출구 앞 광장", targetMembers: 8 },
  { group: "은평", order: 6, date: "10/29", day: "일", location: "구파발역 - 1번 출구 인공폭포 앞", targetMembers: 8 },
  { group: "은평", order: 7, date: "11/4", day: "토", location: "연신내역 - 7번 출구 국민은행 앞", targetMembers: 8 },
  { group: "은평", order: 8, date: "11/5", day: "일", location: "연신내역 - 7번 출구 국민은행 앞", targetMembers: 8 },
  { group: "서대문", order: 1, date: "10/7", day: "토", location: "신촌역 - 6번 출구 앞", targetMembers: 8 },
  { group: "서대문", order: 2, date: "10/8", day: "일", location: "신촌역 - 6번 출구 앞", targetMembers: 8 },
  { group: "서대문", order: 3, date: "10/15", day: "일", location: "홍제역 - 2번 출구 앞", targetMembers: 8 },
  { group: "서대문", order: 4, date: "10/22", day: "일", location: "홍제역 - 2번 출구 앞", targetMembers: 8 },
  { group: "서대문", order: 5, date: "10/28", day: "토", location: "충정로역 - 2번 출구 앞", targetMembers: 8 },
  { group: "서대문", order: 6, date: "11/5", day: "일", location: "충정로역 - 2번 출구 앞", targetMembers: 8 },
];
