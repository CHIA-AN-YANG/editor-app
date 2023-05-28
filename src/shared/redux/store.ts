import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof rootReducer>;

export default store;