import { create } from "zustand";

// Define the type for the feature flags
interface FeatureFlags {
  featureAgents: boolean;
  featureBeta: boolean;
  featureSearch: boolean;
  featureIntegrate: boolean;
}

// Define the type for the store's state and actions
interface FeatureFlagStore {
  flags: FeatureFlags;
  toggleFeatureFlag: (feature: keyof FeatureFlags) => void;
  setFeatureFlag: (feature: keyof FeatureFlags, value: boolean) => void;
}

// Define the initial state of the feature flags
const initial: FeatureFlags = {
  featureAgents: false,
  featureBeta: true,
  featureSearch: false,
  featureIntegrate: true,
};

// Create the store
const useFlagStore = create<FeatureFlagStore>()((set) => ({
  flags: initial,
  toggleFeatureFlag: (feature) =>
    set((state) => ({
      flags: {
        ...state.flags,
        [feature]: !state.flags[feature],
      },
    })),
  setFeatureFlag: (feature, value) =>
    set((state) => ({
      flags: {
        ...state.flags,
        [feature]: value,
      },
    })),
}));

export default useFlagStore;
