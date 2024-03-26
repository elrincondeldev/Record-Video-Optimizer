import { create } from "zustand";

export interface Values {
  script: string[];
  setScript: (newScript: string[]) => void;
}

export const useValueStore = create<Values>((set) => ({
  script: [],
  setScript: (newScript) => set({ script: newScript }),
}));
