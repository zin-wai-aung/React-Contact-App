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
  }),
});

export const {useGetContactQuery } = contactEndpoint;

