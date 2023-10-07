"use client";

import useData from "./useData";
import cx from "classnames";

import "./dashboard.css";
import { meetings } from "./sheet.metadata";
import { groupBy } from "@/utils/array";
import { useState } from "react";
import GroupDashboard from "./GroupDashboard";

export default function Page() {
  const { isLoading, members } = useData();
  const [activeGroup, setActiveGroup] = useState("");

  if (isLoading) return <div>Loading Data...</div>;

  const groups = groupBy(meetings, (r) => r.group);
  const entries = [...groups.entries()];
  console.log(members);

  return (
    <main id="dashboard">
      <section>
        <h1>전체 모집 현황</h1>
        {members.length}명 지원
      </section>
      <section>
        <h1>지부별 현황</h1>
        <div className="tabs">
          {entries.map(([group, meeting]) => (
            <span
              className={cx("tab", { active: group === activeGroup })}
              onClick={() => setActiveGroup(group)}
              key={group}
            >
              {group}
            </span>
          ))}
        </div>
        <GroupDashboard members={members} group={activeGroup} />
      </section>
    </main>
  );
}
