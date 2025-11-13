import {
  Archive,
  ChevronDown,
  ChevronRight,
  EllipsisVertical,
  Trash2,
} from "lucide-react";
import CustomSelect from "@/components/customized/CustomSelect";
import CustomDropdown from "@/components/customized/CustomDropdown";
import { applicationStatuses } from "@/lib/mock-data/applications";

const applicationMenuItems = [
  {
    label: "Delete",
    icon: <Trash2 color="#fb2c36" />,
    color: "bg-red-50 text-red-500!",
  },
  { label: "Archive", icon: <Archive /> },
  { label: "Description", icon: <ChevronRight /> },
];

export default function ApplicationItem({ application }) {
  return (
    <div className="flex gap-x-3 max-w-full items-center rounded-md py-2 px-3 shadow-sm border text-foreground/75">
      <div className="flex w-full items-center">
        <span className="font-medium flex-[0_1_15%]">
          {application.position}
        </span>
        <span className="flex-[0_1_15%]">{application.organization}</span>
        <span className="flex-[0_1_15%]">{application.location}</span>
        <span className="flex-1">{application.workArrangement}</span>
        <span className="flex-1">{application.salary}</span>
        <span className="flex-1">{application.platform}</span>
        <CustomSelect
          triggerClassName="flex-1 max-w-[150px] text-sm! rounded-full!"
          placeholder="Status"
          items={applicationStatuses}
          value={application.status}
          arrow={<ChevronDown className="size-4" />}
        />
      </div>
      <CustomDropdown
        items={applicationMenuItems}
        trigger={<EllipsisVertical size={16} />}
        align="end"
      />
    </div>
  );
}
