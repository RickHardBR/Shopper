export const getKeyLocalStorage = (key: string) => {
  const result = localStorage.getItem(key) !== null ? localStorage.getItem(key) : ''
  return result
}