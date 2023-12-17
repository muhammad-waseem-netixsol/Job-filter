import { create } from "zustand";
import data from "../data/data.json";

const useAppStore = create((set) => ({
  data,
  filterKeywords: [],
  addFilterKeywords: (data) => {
    set((state) => ({
      filterKeywords: [...state.filterKeywords, data],
    }));
  },
  deleteKeyword: (data) => {
    set((state) => ({
      filterKeywords: state.filterKeywords.filter((key) => key !== data),
    }));
  },
  clearAll: () => {
    set((state) => ({
      filterKeywords: [],
    }));
  },
}));

export default useAppStore;
