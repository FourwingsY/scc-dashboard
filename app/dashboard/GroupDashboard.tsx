import { meetings } from "./sheet.metadata";
import { Member } from "./useData";

interface Props {
  members: Member[];
  group: string;
}
export default function GroupDashboard({ members, group }: Props) {
  const memberOnGroup = members.filter((m) => m.selectedArea === group);
  const meetingsOnGroup = meetings.filter((r) => r.group === group).sort((a, b) => a.order - b.order);
  // console.log(memberOnGroup);
  // console.log(meetingsOnGroup);
  return (
    <section className="group-dashboard">
      <h3>신청인원 {memberOnGroup.length}명</h3>
      <table>
        <tbody>
          <tr>
            <th>날짜</th>
            <th>집결장소</th>
            <th>신청인원</th>
          </tr>
          {meetingsOnGroup.map((meet) => (
            <tr key={meet.order}>
              <td>
                {meet.date} ({meet.day})
              </td>
              <td>{meet.location}</td>
              <td>{memberOnGroup.filter((m) => m.selectedTimes.includes(meet.date)).length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
