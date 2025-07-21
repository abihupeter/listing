import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./apiSlice/auth/authSlice";
import { propertySlice } from "./apiSlice/property/propertySlice";
import { getPropertiesByLocationSlice } from "./apiSlice/property/properties-by-locationSlice";
import { filterPropertiesByPriceSlice } from "./apiSlice/property/filter-properties-by-priceSlice";
import { getGroupedPropertiesByLocationSlice } from "./apiSlice/property/grouped-properties-by-locationSlice";
import { getBlogsSlice } from "./apiSlice/blog/blogsSlice";
import { getPropertyNearbyFacilitiesSlice } from "./apiSlice/property/near-by-facilitiesSlice";
import { getPropertyHousesSlice } from "./apiSlice/property/property-housesSlice";
import { getPropertySpecificDetailsSlice } from "./apiSlice/property/property-specific-detailsSlice";
import { getUnitSpecificDetailsSlice } from "./apiSlice/property/unit-specific-detailSlice";
import { getUnitRoomsDetailsSlice } from "./apiSlice/property/unit-rooms-detailsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authSlice.reducerPath]: authSlice.reducer,
      [propertySlice.reducerPath]: propertySlice.reducer,
      [getPropertiesByLocationSlice.reducerPath]:
        getPropertiesByLocationSlice.reducer,
      [filterPropertiesByPriceSlice.reducerPath]:
        filterPropertiesByPriceSlice.reducer,
      [getGroupedPropertiesByLocationSlice.reducerPath]:
        getGroupedPropertiesByLocationSlice.reducer,
      [getBlogsSlice.reducerPath]: getBlogsSlice.reducer,
      [getPropertyNearbyFacilitiesSlice.reducerPath]:
        getPropertyNearbyFacilitiesSlice.reducer,
      [getPropertyHousesSlice.reducerPath]: getPropertyHousesSlice.reducer,
      [getPropertySpecificDetailsSlice.reducerPath]:
        getPropertySpecificDetailsSlice.reducer,
      [getUnitSpecificDetailsSlice.reducerPath]:
        getUnitSpecificDetailsSlice.reducer,
      [getUnitRoomsDetailsSlice.reducerPath]: getUnitRoomsDetailsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authSlice.middleware,
        propertySlice.middleware,
        getPropertiesByLocationSlice.middleware,
        filterPropertiesByPriceSlice.middleware,
        getGroupedPropertiesByLocationSlice.middleware,
        getBlogsSlice.middleware,
        getPropertyNearbyFacilitiesSlice.middleware,
        getPropertyHousesSlice.middleware,
        getPropertySpecificDetailsSlice.middleware,
        getUnitSpecificDetailsSlice.middleware,
        getUnitRoomsDetailsSlice.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
