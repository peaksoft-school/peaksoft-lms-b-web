export const getFromLocalStorage = (key) => {
   return JSON.parse(localStorage.getItem(key))
}

export const setLocalStorage = (key, data) => {
   const json = JSON.stringify(data)
   localStorage.setItem(key, json)
}

export const removeLocalStorage = (key) => {
   localStorage.removeItem(key)
}

export const clearLocalStorage = () => {
   localStorage.clear()
}
