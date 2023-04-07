import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const coffeesApi = createApi({
    reducerPath: 'coffees',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            fetchCoffees: builder.query({
                query: (roaster) => {
                    return {
                        url: '/coffees',
                        params: {
                            roasterId: roaster.id
                        },
                        method: 'GET',
                    };
                }
            })
        };
    }
});

export const { useFetchCoffeesQuery } = coffeesApi;
export { coffeesApi };