import type { CalendarEvent } from "@/lib/types/schedules";
import { Views, type View } from "react-big-calendar";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export type ScheduleDrawerMode = "create" | "update" | "view" | null;

type ScheduleUIState = {
  drawerMode: ScheduleDrawerMode;
  selectedEvent: CalendarEvent | null;
  createStart: Date | null;
  createEnd: Date | null;
  view: View;
  currentDate: Date;
};

const getInitialState = (): ScheduleUIState => ({
  drawerMode: null,
  selectedEvent: null,
  createStart: null,
  createEnd: null,
  view: Views.WEEK,
  currentDate: new Date(),
});

export const useScheduleStore = create(
  combine(getInitialState(), (set) => ({
    setView: (view: View) => set({ view }),

    setCurrentDate: (date: Date) => set({ currentDate: new Date(date) }),
    setSelectedEvent: (event: CalendarEvent | null) =>
      set({ selectedEvent: event }),
    openViewDrawer: (event: CalendarEvent) => {
      set({
        drawerMode: "view",
        selectedEvent: event,
      });
    },
    openCreateDrawer: (start: Date, end: Date) => {
      set({
        drawerMode: "create",
        selectedEvent: null,
        createStart: start,
        createEnd: end,
      });
    },
    openUpdateDrawer: (event: CalendarEvent) => {
      set({
        drawerMode: "update",
        selectedEvent: event,
        currentDate: new Date(event.start),
      });
    },
    closeDrawer: () =>
      set({
        drawerMode: null,
        selectedEvent: null,
        createStart: null,
        createEnd: null,
      }),

    resetUI: () => set(getInitialState()),
  })),
);
