import ScheduleCalendar from "@/components/schedules/Calendar";
import Box from "@mui/material/Box";
import SchedulesSkeleton from "@/components/schedules/SchedulesSkeleton";
import { useSchedulesData } from "@/utils/hooks/useSchedules";
import { useScheduleStore } from "@/store/schedules/scheduleStore";
import { useEffect, useState } from "react";
import EventPopover from "@/components/schedules/EventPopover";
import ScheduleForm from "@/components/schedules/ScheduleForm";
import { useDialogStore } from "@/store/dialog/dialogStore";
import useShallowStore from "@/store/useShallowStore";
import Span from "@/components/shared/typography/Span";

export default function SchedulesPage() {
  const { selectedEvent, view, currentDate, closeDrawer, resetUI } =
    useShallowStore(useScheduleStore, (state) => ({
      selectedEvent: state.selectedEvent,
      view: state.view,
      currentDate: state.currentDate,
      closeDrawer: state.closeDrawer,
      resetUI: state.resetUI,
    }));

  useEffect(() => {
    resetUI();
  }, [resetUI]);

  const { schedules, isLoading, error, deleteSchedule } = useSchedulesData({
    view,
    currentDate,
  });

  const [eventAnchor, setEventAnchor] = useState<HTMLElement | null>(null);
  const openConfirmation = useDialogStore((state) => state.openConfirmation);

  if (isLoading) return <SchedulesSkeleton />;

  if (error) return <p>Error: {error.message}</p>;

  const handleCloseEventPopover = () => {
    setEventAnchor(null);
  };

  function handleDelete(onSuccess: () => void) {
    if (!selectedEvent) return;

    openConfirmation({
      title: "Remove this event?",
      message: (
        <>
          <Span>This will permanently delete</Span>&nbsp;
          <Span fontWeight="semiBold">{selectedEvent.title}</Span>.
        </>
      ),
      type: "error",
      icon: "delete",
      onConfirm: async () => {
        try {
          await deleteSchedule({ id: selectedEvent.id });
          closeDrawer();
          onSuccess();
        } catch (err) {
          console.error(err);
        }
      },
    });
  }

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
      <ScheduleCalendar events={schedules} setEventAnchor={setEventAnchor} />
      <EventPopover
        selectedEvent={selectedEvent}
        eventAnchor={eventAnchor}
        handleCloseEventPopover={handleCloseEventPopover}
        handleDelete={handleDelete}
      />

      <ScheduleForm handleDelete={handleDelete} />
    </Box>
  );
}
