// src/composables/useUserRepositories.js

export default function useLocalStorage(name: string) {
  const setLocalStorage = (data: object): void => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  const getLocalStorage = (): string => {
    let MyData = localStorage.getItem(name);
    if (typeof MyData === "string") {
      return MyData;
    } else {
      return '';
    }

  };
  return {
    getLocalStorage,
    setLocalStorage
  };
}
