import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronizeItem, setSincronizeItem] = useState(false);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
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
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setSincronizeItem(true);
      }
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizeItem(false);
  };

  return {item, saveItem, loading, error, sincronize};
}

export { useLocalStorage };