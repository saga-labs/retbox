import { create } from 'zustand';

// Define the view states
export enum View {
  drive = 'drive',
  chat = 'chat',
  split = 'split',
}

// Define the view state
interface ViewState {
  selected: View;
  setSelected: (s: View) => void;
}

// Create the store
const useViewStore = create<ViewState>()((set) => ({
  selected: View.split,
  setSelected: (s: View) =>
    set((state) => ({ selected: (state.selected = s) })),
}));

export default useViewStore;
