import { create } from "zustand";
import type { Session } from "@supabase/supabase-js";

interface SessionState {
  session: Session | null;
  setSession: (s: Session | null) => void;
}

const useSessionStore = create<SessionState>()((set) => ({
  session: null,
  setSession: (s: Session | null) => set((state) => ({ session: (state.session = s) })),
}));

export default useSessionStore;