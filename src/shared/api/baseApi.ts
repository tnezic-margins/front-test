import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { env } from "../lib/config/env";
// import { env } from "shared/lib/config/env";
import { env } from "shared/lib";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
  endpoints: (builder) => ({}),
});
