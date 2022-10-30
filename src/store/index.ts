import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slice/drawer";
import themeReducer from "./slice/theme";
const store = configureStore({
  reducer: { drawer: drawerReducer, theme: themeReducer },
});
export default store;
