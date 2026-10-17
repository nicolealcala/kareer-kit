import { useQuery, useMutation, keepPreviousData } from "@tanstack/react-query";
import {
  deleteSchedule,
  getSchedules,
  updateSchedule,
} from "@/lib/services/schedulesService";
import type { ScheduleFormInputs } from "@/lib/schema/scheduleSchema";
import { showToast } from "@/lib/config/toast";
import { useQueryClient } from "./useQueryClient";
import { DateTime } from "luxon";
import type { View } from "react-big-calendar";

type UseSchedulesDataProps = {
  view: View;
  currentDate: Date;
};

export function useSchedulesData({
  view,
  currentDate,
}: Partial<UseSchedulesDataProps> = {}) {
  const key = "schedules";
  const { queryClient } = useQueryClient();

  const dateParams = (() => {
    if (!currentDate || !view) return null;
    const luxonView =
      view === "agenda" ? "month" : (view as "day" | "week" | "month");
    const luxonDate = DateTime.fromJSDate(currentDate);

    return {
      startDate: luxonDate.startOf(luxonView).toUTC().toISO()!,
      endDate: luxonDate
        .plus({ [luxonView]: 1 })
        .startOf(luxonView)
        .toUTC()
        .toISO()!,
    };
  })();

  // --- GET Query ---
  const query = useQuery({
    queryKey: [key, { view, ...dateParams }],
    queryFn: () => getSchedules(dateParams!.startDate, dateParams!.endDate),
    enabled: !!dateParams,
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });

  // --- SAVE Mutation (Create or Update) ---
  const saveMutation = useMutation({
    mutationFn: ({ data, id }: { data: ScheduleFormInputs; id?: string }) =>
      updateSchedule(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
      showToast("success", "Event saved successfully");
    },
    onError: (error) => {
      console.error("Failed to save schedule: ", error);
      showToast("error", "Failed to save event");
    },
  });

  // --- DELETE Mutation  ---
  const deleteMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteSchedule(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
      });
      showToast("success", "Event deleted successfully");
    },
    onError: (error) => {
      console.error("Failed to delete schedule: ", error);
      showToast("error", "Failed to delete event");
    },
  });

  return {
    // Data & State
    schedules: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,

    // Actions
    saveSchedule: saveMutation.mutateAsync,
    isSaving: saveMutation.isPending,

    deleteSchedule: deleteMutation.mutateAsync,
    isDeleting: deleteMutation.isPending,
  };
}
