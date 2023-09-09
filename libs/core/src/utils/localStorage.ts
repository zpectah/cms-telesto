export const getLocalStorageValue = (key: string) => {
  let response;
  const value = window?.localStorage.getItem(key);
  if (value) {
    response = JSON.parse(value);
  }

  return response;
};

export const setLocalStorageValue = (key: string, value: unknown) =>
  window.localStorage.setItem(key, JSON.stringify(value));
