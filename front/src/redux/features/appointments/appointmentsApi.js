import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appointmentsApi = createApi({
  reducerPath: "appointmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/appointments/" }),

  endpoints: (builder) => ({
    cancelAppointment: builder.mutation({
      query: (id) => ({
        url: `cancel/${id}`,
        method: "PUT",
      }),
    }),

    newAppointment: builder.mutation({
      query: (newAppnmt) => ({
        url: "schedule",
        method: "POST",
        body: newAppnmt,
      }),
    }),
  }),
});

export const { useCancelAppointmentMutation, useNewAppointmentMutation } =
  appointmentsApi;
