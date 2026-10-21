import type { CalendarEvent } from "@/lib/types/schedules";
import Box from "@mui/material/Box";

type EventProps = {
  event: CalendarEvent | null;
  setSelectedEvent: (event: CalendarEvent | null) => void;
  setEventAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export default function Event({
  event,
  setSelectedEvent,
  setEventAnchor,
}: EventProps) {
  return (
    <Box
      onClick={(e) => {
        e.stopPropagation();
        setSelectedEvent(event);
        setEventAnchor(e.currentTarget);
      }}
      sx={
        event?.isShortEvent
          ? {
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }
          : {
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
            }
      }
    >
      {event?.title}
    </Box>
  );
}
