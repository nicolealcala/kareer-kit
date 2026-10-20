import {
  Calendar,
  luxonLocalizer,
  type SlotInfo,
  Views,
} from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/styles/schedules.scss";
import React, { useMemo } from "react";
import CustomToolbar, { type CustomToolbarProps } from "./CalendarToolbar";
import type { CalendarEvent, Schedule } from "@/lib/types/schedules";
import { toCalendarEvent } from "@/utils/date";
import { useScheduleStore } from "@/store/schedules/scheduleStore";
import useShallowStore from "@/store/useShallowStore";
import Event from "./Event";
import Box from "@mui/material/Box";
import { eventColors } from "@/lib/config/colors";
import { blueGrey } from "@mui/material/colors";

const localizer = luxonLocalizer(DateTime);

type ScheduleCalendarProps = {
  events: Schedule[];
  setEventAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

function ScheduleCalendar({ events, setEventAnchor }: ScheduleCalendarProps) {
  const {
    view,
    currentDate,
    setSelectedEvent,
    setView,
    setCurrentDate,
    openCreateDrawer,
  } = useShallowStore(useScheduleStore, (state) => ({
    setSelectedEvent: state.setSelectedEvent,
    view: state.view,
    currentDate: state.currentDate,
    setView: state.setView,
    setCurrentDate: state.setCurrentDate,
    openCreateDrawer: state.openCreateDrawer,
  }));

  const components = useMemo(
    () => ({
      toolbar: (props: CustomToolbarProps) => <CustomToolbar {...props} />,
      event: (props: { event: CalendarEvent }) => (
        <Event
          {...props}
          setSelectedEvent={setSelectedEvent}
          setEventAnchor={setEventAnchor}
        />
      ),
    }),
    [],
  );

  const calendarEvents = useMemo(
    () => events.map(toCalendarEvent).filter((event) => event !== null),
    [events],
  );

  const minTime = new Date();
  minTime.setHours(0, 0, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(23, 59, 59, 999);

  const handleSelectEvent = (
    event: CalendarEvent,
    e: React.SyntheticEvent<HTMLElement>,
  ) => {
    setSelectedEvent(event);
    setEventAnchor(e.currentTarget as HTMLElement);
  };

  const handleSelectSlot = ({ start }: SlotInfo) => {
    const createStart = new Date(start);

    createStart.setMinutes(
      Math.floor(createStart.getMinutes() / 15) * 15,
      0,
      0,
    );

    const createEnd = new Date(createStart);
    createEnd.setMinutes(createEnd.getMinutes() + 30);

    openCreateDrawer(createStart, createEnd);
  };

  const eventPropGetter = (event: CalendarEvent) => {
    const eventColor = eventColors[event.type];
    const duration = event.end.getTime() - event.start.getTime();
    const isShortEvent = duration <= 30 * 60 * 1000;
    const isCancelled = event.status === "cancelled";

    return {
      style: {
        "--event-color": isCancelled ? blueGrey[50] : eventColor[50],
        "--event-selected": isCancelled ? blueGrey[200] : eventColor[200],
        "--event-hover-bg": isCancelled ? blueGrey[100] : eventColor[100],
        "--event-focus-outline": isCancelled ? blueGrey[700] : eventColor[700],
        border: "none",
        borderLeft: `4px solid ${isCancelled ? blueGrey[200] : eventColor[700]}`,
        fontSize: "0.8rem",
        fontWeight: 500,

        color: isCancelled ? blueGrey[300] : "var(--mui-palette-text-primary)",
        ...(isShortEvent
          ? {
              display: "flex",
              alignitems: "center",
              justifyContent: "center",
              width: "100%",
            }
          : {
              paddingBlock: "6px",
            }),

        "&:hover": {
          backgroundColor: eventColor[700],
        },
      },
    };
  };

  return (
    <Box
      bgcolor="background.paper"
      p={2}
      border="1px solid"
      borderColor="divider"
      borderRadius={3}
      height="100%"
      className="subtle-shadow"
    >
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        view={view}
        onView={setView}
        date={currentDate}
        onNavigate={setCurrentDate}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventPropGetter}
        components={components}
        popup
        step={30}
        timeslots={2}
        min={minTime}
        max={maxTime}
        scrollToTime={new Date()}
      />
    </Box>
  );
}

export default React.memo(ScheduleCalendar);
