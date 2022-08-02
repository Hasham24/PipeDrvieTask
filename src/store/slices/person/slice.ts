import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
export default personSlice;
export const { setPersons } = personSlice.actions