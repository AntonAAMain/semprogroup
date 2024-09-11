import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

interface StoreState {
  isActive: boolean;
  open: () => void;
  close: () => void;
}

export const useCallModalStore = create<StoreState>()(
  immer((set, get) => ({
    isActive: false,
    open: () => {
      set((state) => {
        state.isActive = true;
      });
    },

    close: () => {
      set((state) => {
        state.isActive = false;
      });
    },
  }))
);
