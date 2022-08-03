import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
export interface PersonState {
    persons: Record<string, any>[];
}
const initialState: PersonState = {
    persons: [],
};
const personSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        setPersons: (state, action: PayloadAction<{ start: number, data: object[] }>) => {
            const { data, start } = action.payload
            if (start === 0)
                state.persons = data
            else
                state.persons = [...state.persons, ...data]
        },
        setPersonsActivities: (state, action: PayloadAction<{ start: number, id: number, data: object[] }>) => {
            const { id, data, start } = action.payload
            let newPersons = [...state.persons]
            const index = newPersons.findIndex(item => item?.id == id)
            if (start === 0)
                newPersons[index].activities = data

            else
                newPersons[index].activities = [...newPersons[index].activities, ...data]
            state.persons = newPersons
        },
        setPersonsDeals: (state, action: PayloadAction<{ start: number, id: number, data: object[] }>) => {
            const { id, data, start } = action.payload
            let newPersons = [...state.persons]
            const index = newPersons.findIndex(item => item?.id == id)
            if (start === 0)
                newPersons[index].deals = data

            else
                newPersons[index].deals = [...newPersons[index].deals, ...data]
            state.persons = newPersons
        },
        removePerson: (state) => {
            state.persons = []
        }
    }

})
// Actions
export const { setPersons, setPersonsActivities, setPersonsDeals, removePerson } = personSlice.actions
// Reducer
export const personSliceReducer = personSlice.reducer;
// Selectors
export const selectPersons = (state: RootState) => state.person.persons;

