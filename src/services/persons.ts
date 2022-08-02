import { BaseUrl, Token } from './config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setPersons, setPersonsActivities, setPersonsDeals } from '../store/slices/person';
import { LIMIT } from '../utils/constants';
export const persons = createApi({
  reducerPath: 'personsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,

  }),
  endpoints: (builder) => ({
    getPersons: builder.query<any, { start: number }>({
      query: (arg) => {
        return {
          url: `persons`,
          params: { api_token: Token, start: arg?.start, limit: LIMIT },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const response = await queryFulfilled
        const { data } = response?.data
        if (data) {
          dispatch(setPersons({ data: data, start: arg?.start }))
        }
      },
    }),
    getActivity: builder.query<any, { id: number, start: number }>({
      query: (arg) => {
        return {
          url: `persons/${arg.id}/activities`,
          params: { api_token: Token, start: arg?.start, limit: LIMIT },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const response = await queryFulfilled
        const { data } = response?.data
        if (data) {
          dispatch(setPersonsActivities({ data: data, id: arg?.id, start: arg?.start }))
        }
      },
    }),
    getDeals: builder.query<any, { id: number, start: number }>({
      query: (arg) => {
        return {
          url: `persons/${arg.id}/deals`,
          params: { api_token: Token, start: arg?.start, limit: LIMIT },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const response = await queryFulfilled
        const { data } = response?.data
        if (data) {
          dispatch(setPersonsDeals({ data: data, id: arg?.id, start: arg?.start }))
        }
      },
    }),
  }),
})
export const { useGetPersonsQuery, useGetActivityQuery, useGetDealsQuery } = persons