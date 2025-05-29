import { create } from 'zustand';
import { createBaseSlice, withLoading } from './utils';
import type { Store, StoreSlice } from './types';

// Define your store's specific state
interface ExampleState {
  count: number;
  data: string[];
}

// Define your store's specific actions
interface ExampleActions {
  increment: () => void;
  decrement: () => void;
  fetchData: () => Promise<void>;
}

// Combine with base store types
type ExampleStore = Store & ExampleState & ExampleActions;

// Create your store slice
const createExampleSlice: StoreSlice<ExampleStore> = (set, get, store) => ({
  // Include base slice
  ...createBaseSlice()(set, get, store),

  // Your specific state
  count: 0,
  data: [],

  // Your specific actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  fetchData: async () => {
    await withLoading(get(), async () => {
      // Simulate API call
      const response = await new Promise<string[]>((resolve) =>
        setTimeout(() => resolve(['item1', 'item2', 'item3']), 1000)
      );
      set({ data: response });
    });
  }
});

// Create the store
export const useExampleStore = create<ExampleStore>()((...args) => ({
  ...createExampleSlice(...args)
}));

// Example selectors
export const selectCount = (state: ExampleStore) => state.count;
export const selectData = (state: ExampleStore) => state.data;
export const selectIsLoading = (state: ExampleStore) => state.isLoading;
export const selectError = (state: ExampleStore) => state.error;
