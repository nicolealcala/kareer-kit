import { DateTime } from "luxon";
import type { ScheduleFormInputs } from "../schema/scheduleSchema";

const URL = `${import.meta.env.VITE_BASE_URL}/api/events`;

export const getSchedules = async (startDate: string, endDate: string) => {
  const response = await fetch(
    `${URL}?startDate=${startDate}&endDate=${endDate}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) throw new Error("Failed to fetch schedules");

  return await response.json();
};

export const updateSchedule = async (
  formData: ScheduleFormInputs,
  selectedId?: string,
) => {
  const isUpdate = !!selectedId;
  const url = isUpdate ? `${URL}/${selectedId}` : URL;

  const response = await fetch(url, {
    method: isUpdate ? "PATCH" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...formData,
      startAt: DateTime.fromISO(formData.start).toUTC().toISO(),
      endAt: DateTime.fromISO(formData.end).toUTC().toISO(),
    }),
  });

  if (!response.ok) throw new Error("Save failed");
  return await response.json();
};

export const deleteSchedule = async (id: string) => {
  const response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Failed to delete");
  return await response.json();
};
