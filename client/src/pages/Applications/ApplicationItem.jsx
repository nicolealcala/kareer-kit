import {
  Archive,
  ChevronDown,
  ChevronRight,
  EllipsisVertical,
  Trash2,
  Link,
  SquareArrowOutUpRight,
} from "lucide-react";
import CustomSelect from "@/components/customized/CustomSelect";
import CustomDropdown from "@/components/customized/CustomDropdown";
import { applicationStatuses } from "@/lib/data/applications";
import WorkSetupBadge from "./WorkSetupBadge";

const applicationMenuItems = [
  {
    label: "Delete",
    icon: <Trash2 className="text-red-500" />,
    color: "hover:bg-red-50 text-red-500!",
  },
  {
    label: "Archive",
    icon: <Archive className="text-slate-700" />,
    color: "text-slate-700!",
  },
  {
    label: "Description",
    icon: <ChevronRight className="text-slate-700" />,
    color: "text-slate-700!",
  },
];

export default function ApplicationItem({ application }) {
  const applicationDate = new Date(application.date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
    }
  );
  return (
    <tr className="flex w-full gap-x-3 max-w-full items-center rounded-md p-3 shadow-sm border text-foreground/75">
      <td className="flex flex-1 items-center text-foreground/50 text-xs">
        {applicationDate}
      </td>
      <td className="flex flex-1 min-w-[250px] items-center font-medium">
        <span className="line-clamp-2">{application.position}</span>
      </td>
      <td className="flex flex-1 items-center">
        <span className="line-clamp-2">{application.organization}</span>
      </td>
      <td className="flex flex-1 items-center">
        <WorkSetupBadge>{application.workArrangement}</WorkSetupBadge>
      </td>
      <td className="flex flex-1 items-center">{application.salary}</td>
      <td className="flex flex-1 items-center">
        <a
          className="flex-1 inline-flex items-center"
          href={application.from.link}
          target="_blank"
        >
          {application.from.platform}&nbsp;
          <SquareArrowOutUpRight size={12} className="mt-1" />
        </a>
      </td>
      <td className="flex flex-1 items-center">
        <CustomSelect
          triggerClassName="flex-1 max-w-[150px] text-sm! rounded-full!"
          placeholder="Status"
          items={applicationStatuses}
          value={application.status}
          arrow={<ChevronDown className="size-4" />}
        />
      </td>
      <td>
        <CustomDropdown
          items={applicationMenuItems}
          trigger={<EllipsisVertical size={16} />}
          align="end"
        />
      </td>
    </tr>
  );
}
