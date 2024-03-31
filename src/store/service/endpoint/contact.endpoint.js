import { apiService } from "../api.service";

const contactEndpoint = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
        headers: {
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
      }),
    }),
    createContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
            method: "POST",
        body:formData,
        headers: {
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
      }),
    }),
  }),
});

export const {useGetContactQuery , useCreateContactMutation } = contactEndpoint;

