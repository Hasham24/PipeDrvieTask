import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
export interface PersonState {
    persons: object[];
    personActivities: object | null
    personDeals: object | null
}
const initialState: PersonState = {
    persons: [],
    personActivities: null,
    personDeals: null
};
const personSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        setPersons: (state, action: PayloadAction<{ start: number, data: object[] }>) => {
            if (action?.payload?.start == 0)
                state.persons = action.payload?.data
            else
                state.persons = [...state.persons, ...action.payload?.data]
        }
    }

})
// Actions
export const { setPersons } = personSlice.actions
// Reducer
export const personSliceReducer = personSlice.reducer;
// Selectors
export const selectPersons = (state: RootState) => state.person.persons;
export const selectPersonActivites = (state: RootState) => state.person.personActivities;
export const selectPersonDeals = (state: RootState) => state.person.personDeals;

