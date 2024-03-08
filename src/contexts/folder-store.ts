import { create } from "zustand";
import type { Bucket } from "@supabase/storage-js";

interface FolderState {
  selected: Bucket | null;
  setSelected: (s: Bucket| null) => void;
}

const useFolderStore = create<FolderState>()((set) => ({
  selected: null,
  setSelected: (s: Bucket | null) => set((state) => ({ selected: (state.selected = s) })),
}));

export default useFolderStore;
