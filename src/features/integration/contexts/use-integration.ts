import { create } from "zustand";

// Define the view states
export enum Step {
  select = "select",
  connect = "connect",
  apply = "apply",
}

// Define the view state
interface State {
  open: boolean;
  setOpen: (b: boolean) => void;
  step: number;
  increase: () => void;
  decrease: () => void;
}

// Create the store
const useIntegrationStore = create<State>()((set) => ({
  open: false,
  setOpen: (b: boolean) => set((state) => ({ open: (state.open = b) })),
  step: 0,
  increase: () => set((state) => ({ step: (state.step += 1) })),
  decrease: () => set((state) => ({ step: (state.step -= 1) })),
}));

export default useIntegrationStore;
