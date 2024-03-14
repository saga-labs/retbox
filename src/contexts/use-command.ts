import { create } from 'zustand';

// Define the state
interface State {
  open: boolean;
  setOpen: (b: boolean) => void;
}

// Create the store
const useCommandStore = create<State>()((set) => ({
  open: false,
  setOpen: (b: boolean) => set((state) => ({ open: (state.open = !b) })),
}));

export default useCommandStore;
