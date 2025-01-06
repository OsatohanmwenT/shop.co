"use client";

import {create} from 'zustand';

interface FilterState {
    filters: Record<string, string | string[]>; // Can be a string or array
    setFilter: (name: string, value: string | string[]) => void;
    initializeFromURL: (urlParams: URLSearchParams) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    filters: {},
    setFilter: (name, value) =>
        set((state) => ({
            filters: {
                ...state.filters,
                [name]: value,
            },
        })),
    initializeFromURL: (filters) => set({ ...filters }),
}));