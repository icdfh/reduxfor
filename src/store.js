import { createStore } from 'redux';
import rootReducer from './reducers'; // Путь к вашему корневому редьюсеру

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Обработайте возможные ошибки, например, когда локальное хранилище не доступно
    console.error('Could not save state', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    
    console.error('Could not load state', e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
