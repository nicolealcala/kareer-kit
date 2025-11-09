import Filter from "@/components/customized/filter";
import { Input } from "@/components/ui/input";
import { getMonthsUpToCurrent } from "@/lib/utils/date";
import React from "react";

const statusItems = [
  { label: "All", value: "all" },
  { label: "Applied", value: "applied" },
  { label: "Interviewing", value: "interviewing" },
  { label: "Offered", value: "offered" },
  { label: "Rejected", value: "rejected" },
];

const dateItems = getMonthsUpToCurrent();

const Applications = () => {
  return (
    <article className="w-full flex flex-col">
      {/* Navigation */}
      <section className="flex justify-between items-end">
        <span>Recent</span>
        <div className="w-max flex gap-x-2">
          <Filter placeholder="Status" items={statusItems} defaultValue="all" />
          <Filter
            placeholder="Month"
            items={dateItems}
            defaultValue={dateItems[dateItems.length - 1].value}
          />
          <Input placeholder="Search" className="min-w-xs" />
        </div>
      </section>
    </article>
  );
};

export default Applications;
