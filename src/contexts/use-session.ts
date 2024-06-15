import { create } from 'zustand';

type Session = {
  isConnected: boolean;
};

interface SessionState {
  session: Session | null;
  setSession: (s: Session | null) => void;
}

const useSessionStore = create<SessionState>()((set) => ({
  session: null,
  setSession: (s: Session | null) =>
    set((state) => ({ session: (state.session = s) })),
}));

export default useSessionStore;
