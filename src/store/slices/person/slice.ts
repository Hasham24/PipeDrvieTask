import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface PersonState {
    persons: object | null;
    personActivities: object | null
    personDeals: object | null
}
const initialState: PersonState = {
    persons: null,
    personActivities: [],
    personDeals: []
};
const personSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        setPersons: (state, action: PayloadAction<{start:number,data:object|null}>) => {

            console.log(action?.payload?.start);
            
            if (action?.payload?.start == 0) {
               state.persons = action.payload?.data
            }
            else{
                state.persons = [...[state.persons],...[action.payload?.data]]
            }
        }
    }

})
export default personSlice;
export const { setPersons } = personSlice.actions