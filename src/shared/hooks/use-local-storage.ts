"use client";

import { useEffect, useRef } from "react";

const useLocalStorage = () => {
  const isMounted = useRef(false);

  const removeItem = (key: string) => {
    if (!isMounted) return;

    localStorage.removeItem(key);
  };

  const getItem = (key: string) => {
    if (!isMounted) return;

    return localStorage.getItem(key);
  };

  const setItem = (key: string, value: string) => {
    if (!isMounted) return;

    localStorage.setItem(key, value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { removeItem, getItem, setItem };
};

export default useLocalStorage;
