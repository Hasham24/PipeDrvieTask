import { BaseUrl, Token } from './config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setPersons } from '../store/slices/person';
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
          params: { api_token: Token, start: arg?.start, limit: 5 },
        };
      },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const response = await queryFulfilled
        if (response?.data?.data) {
          dispatch(setPersons({ data: response?.data?.data, start: arg?.start }))
        }
      },
    }),
    getActivity: builder.query<any, { id: number }>({
      query: (arg) => {
        return {
          url: `persons/${arg.id}/activities`,
          params: { api_token: Token },
        };
      },
    }),
    getDeals: builder.query<any, { id: number }>({
      query: (arg) => {
        return {
          url: `persons/${arg.id}/deals`,
          params: { api_token: Token },
        };
      },
    }),
  }),
})
export const { useGetPersonsQuery, useGetActivityQuery, useGetDealsQuery } = persons