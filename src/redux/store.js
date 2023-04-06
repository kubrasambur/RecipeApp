import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/RecipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
