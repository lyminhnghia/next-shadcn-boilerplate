import { StateCreator } from 'zustand';

export type StoreSlice<T> = StateCreator<T, [], [], T>;

export interface StoreState {
  // Add common state properties here
  isLoading: boolean;
  error: string | null;
}

export interface StoreActions {
  // Add common actions here
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export type Store = StoreState & StoreActions;
