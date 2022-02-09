import {
  ActionReducerMapBuilder,
  CaseReducer,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers
} from '@reduxjs/toolkit';

export type GenericState<T> = {
  data?: T;
  status: 'loading' | 'finished' | 'error' | null;
  error: null;
};

type NoInfer<T> = [T][T extends any ? 0 : never];

export const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericState<T>>
>({
  name = '',
  initialState,
  reducers,
  extraReducers
}: {
  name: string;
  initialState: GenericState<T>;
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
  extraReducers?:
    | CaseReducer<NoInfer<T>, any>
    | ((builder: ActionReducerMapBuilder<NoInfer<T>>) => void);
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      start(state) {
        state.status = 'loading';
      },
      /**
       * If you want to write to values of the state that depend on the generic
       * (in this case: `state.data`, which is T), you might need to specify the
       * State type manually here, as it defaults to `Draft<GenericState<T>>`,
       * which can sometimes be problematic with yet-unresolved generics.
       * This is a general problem when working with immer's Draft type and generics.
       */
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = 'finished';
      },
      ...reducers
    },
    extraReducers: { ...extraReducers }
  });
};
