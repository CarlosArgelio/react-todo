import { useEffect, useReducer, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronizeItem, item, loading, error } = state;

  // ACTIONS CREATORS
  const onError = (error) => dispatch({ type: actionType.error, payload: error });
  const onSuccess = (parseItem) => dispatch({ type: actionType.success, payload: parseItem });
  const onSave = (newItem) => dispatch({ type: actionType.save, payload: newItem });
  const onSicronize = () => dispatch({ type: actionType.sincronize });
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronize = () => {
    onSicronize();
  };

  return {item, saveItem, loading, error, sincronize};
}

const initialState = ({ initialValue }) => ({
  sincronizeItem: false,
  item: initialValue,
  loading: true,
  error: false,
});

const actionType = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionType.error]: {
    ...state,
    error: true,
  },
  [actionType.success]: {
    ...state,
    item: payload,
    error: false,
    loading: false,
    sincronizeItem: true,
  },
  [actionType.save]: {
    item: payload
  },
  [actionType.sincronize]: {
    ...state,
    sincronizeItem: false,
    loading: true,
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};


export { useLocalStorage };