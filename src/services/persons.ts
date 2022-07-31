import { BaseUrl,Token } from './config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// export const persons = createApi({
//     reducerPath: 'persons',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${BaseUrl}`,
//         prepareHeaders: async (headers, { getState }) => {
    
//             return headers
//         },
//         endpoints: (builder) => ({
//             getCategories: builder.query({
              
//             })
//         })

//     }),
// })
export const persons = createApi({
    reducerPath: 'persons',
    baseQuery: fetchBaseQuery({ 
      baseUrl:BaseUrl,
      
     }),
    endpoints: (builder) => ({
      getPersons: builder.query<any,undefined>({
        query: () => {
          return {
            url: `persons`,
            params: {  api_token:Token},
          };
        },
      }),
      getActivity: builder.query<any,{id:number}>({
        query: (arg) => {
          return {
            url: `persons/${arg.id}/activities`,
            params: {  api_token:Token},
          };
        },
      }),
      getDeals: builder.query<any,{id:number}>({
        query: (arg) => {
          return {
            url: `persons/${arg.id}/deals`,
            params: {  api_token:Token},
          };
        },
      }),
    }),
  })
  export const { useGetPersonsQuery,useGetActivityQuery, useGetDealsQuery} = persons