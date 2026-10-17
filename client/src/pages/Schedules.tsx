import ScheduleCalendar from "@/components/schedules/Calendar";
import Box from "@mui/material/Box";
import SchedulesSkeleton from "@/components/schedules/SchedulesSkeleton";
import { useSchedulesData } from "@/utils/hooks/useSchedules";
import { useScheduleStore } from "@/store/schedules/scheduleStore";
import { useEffect } from "react";

export default function SchedulesPage() {
  const view = useScheduleStore((state) => state.view);
  const currentDate = useScheduleStore((state) => state.currentDate);
  const resetUI = useScheduleStore((state) => state.resetUI);

  useEffect(() => {
    resetUI();
  }, [resetUI]);

  const { schedules, isLoading, error } = useSchedulesData({
    view,
    currentDate,
  });

  if (isLoading) return <SchedulesSkeleton />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box
      p={2}
      className="subtle-shadow"
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        p: 2,
      }}
    >
      <ScheduleCalendar events={schedules} />
    </Box>
  );
}
