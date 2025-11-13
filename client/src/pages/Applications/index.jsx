import CustomSelect from "@/components/customized/CustomSelect";
import { Input } from "@/components/ui/input";
import { groupApplicationsByMonth } from "@/lib/utils/date";
import ApplicationItem from "./ApplicationItem";
import { mockData, statusFilters, dateItems } from "@/lib/data/applications";

export default function Applications() {
  const groupedDataEntries = groupApplicationsByMonth(mockData);
  const renderApplications = () => {
    return (
      <ul className="space-y-4">
        {Object.entries(groupedDataEntries).map(([month, applications], i) => (
          <li key={month} className="space-y-2">
            <p className="font-medium text-slate-500">
              {i === 0
                ? null
                : new Date(month).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
            </p>
            <table className="w-full">
              {applications.map((app) => (
                <ApplicationItem key={app.id} application={app} />
              ))}
            </table>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <article className="w-full flex flex-col space-y-2">
      {/* Navigation */}
      <aside className="flex justify-between items-end">
        <p className="font-medium text-slate-500">Recent</p>
        <div className="w-max flex gap-x-2">
          <CustomSelect
            placeholder="Status"
            items={statusFilters}
            value="all"
            type="filter"
          />
          <CustomSelect
            placeholder="Month"
            items={dateItems}
            value={dateItems[dateItems.length - 1].value}
            type="filter"
          />
          <Input placeholder="Search" className="min-w-xs" />
        </div>
      </aside>
      <section>
        {/* Application List */}
        {renderApplications()}
      </section>
    </article>
  );
}
