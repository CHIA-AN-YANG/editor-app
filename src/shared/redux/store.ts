
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pageReducer from './page.reducers';
import selectedPageReducer from './selectedPage.reducer';

const rootReducer = combineReducers({
  selectedPage: selectedPageReducer,
  page: pageReducer,
});

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof rootReducer>;

export default store; 