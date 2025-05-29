import { Store, StoreActions, StoreState, StoreSlice } from './types';

export const createBaseSlice = (): StoreSlice<StoreState & StoreActions> => (set) => ({
  // Initial state
  isLoading: false,
  error: null,

  // Actions
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  reset: () => set({ isLoading: false, error: null }),
});

export const withLoading = async <T>(store: Store, fn: () => Promise<T>): Promise<T> => {
  try {
    store.setLoading(true);
    store.setError(null);
    const result = await fn();
    return result;
  } catch (error) {
    store.setError(error instanceof Error ? error.message : 'An error occurred');
    throw error;
  } finally {
    store.setLoading(false);
  }
};

export const createStoreSelector = <T>(store: Store, selector: (state: Store) => T) => {
  return selector(store);
};
