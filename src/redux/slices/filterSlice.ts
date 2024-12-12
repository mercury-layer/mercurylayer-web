import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  servers: {
    lightning: boolean;
    onChain: boolean;
    status: boolean;
    fee: number;
  };
  units: string[];
}

const initialState: FilterState = {
  servers: {
    lightning: false,
    onChain: false,
    status: false,
    fee: 0,
  },
  units: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setServersFilter: (state, action) => {
      state.servers = action.payload;
    },
    setUnitsFilter: (state, action) => {
      state.units = action.payload;
    },
  },
});

export const { setServersFilter, setUnitsFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
