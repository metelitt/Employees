import {createApi,fetchBaseQuery,retry} from '@reduxjs/toolkit/query/react'

const baseQuery=fetchBaseQuery({
    baseUrl:'http://localhost:8000/api',
})

const baseQueryWithretry=retry(baseQuery,{maxRetries:1});

export const api=createApi({
    reducerPath:'splitApi',
    baseQuery:baseQueryWithretry,
    refetchOnMountOrArgChange:true,
    endpoints:()=>({}),
})