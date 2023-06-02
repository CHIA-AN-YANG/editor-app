
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pageReducer from './page.reducers';
import selectedPageReducer from './selectedPage.reducer';
import editingAttributesReducer from './editingAttributes.reducers';

const rootReducer = combineReducers({
  selectedPage: selectedPageReducer,
  page: pageReducer,
  editingAttributes: editingAttributesReducer
});

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof rootReducer>;

export default store; 