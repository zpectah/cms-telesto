const getValue = (key: string) => {
  let response;
  const value = window?.localStorage.getItem(key);
  if (value) response = value;

  return response;
};

const setValue = (key: string, value: string | number | boolean) =>
  window?.localStorage.setItem(key, String(value));

export const localStorage = {
  getValue,
  setValue,
};
